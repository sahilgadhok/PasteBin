const admin = require('firebase-admin');
const functions = require('firebase-functions');
const config = functions.config().firebase;
const cert = require('./filehub-f9a91-firebase-adminsdk-i3j2q-d3432e7ad7.json');
config.credential = admin.credential.cert(cert);
admin.initializeApp(config);

// Server Routing to abstract on firebase.https.onRequest()
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

// Password hashing
const argon2 = require('@phc/argon2');

// Check token timestamp if it's past 30 minutes
function isTokenInvalid(token) {
  const curtime = Date.now();
  const invalid = typeof token !== 'object' ||
                  ((curtime - token.timestamp) > 30 * 60 * 1000);
  return invalid;
}

// Return a promise, containing the user referred to by this token
// Return Value: {username, info}
function getUserByToken(token) {
  const err = new Error('Invalid token');
  if (!token) {
    return Promise.reject(err);
  }

  const db = admin.database();
  const p = db.ref('/user').once('value')
    .then(function (snapshot) {
      if (!snapshot) {
        return Promise.reject(err);
      }
      const users = snapshot.val();
      if (!users) {
        return Promise.reject(err);
      }

      const matches = Object.keys(users).filter((key) => (
        users[key].token && users[key].token.value === token
      ));
      if (matches.length === 0 || (isTokenInvalid(users[matches[0]].token))) {
        return Promise.reject(err);
      }
      return Promise.resolve({username: matches[0], info: users[matches[0]]});
    });
  return p;
}

// Add new user to the database
app.post('/signup', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
        message: 'Missing username/password'
    });
    return;
  }

  const db = admin.database();
  db.ref('/user/' + req.body.username).once('value')
    .then(function (snapshot) {
      if (snapshot && snapshot.val()) {
        return Promise.reject(new Error('username is taken'));
      }

      return argon2.hash(req.body.password);
    })
    .then(function (hash) {
      return db.ref('/user/' + req.body.username).set({
        password: hash
      });
    })
    .then(function () {
      res.status(200).send({
          message: 'Created ' + req.body.username
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: 'Invalid username/password'
      });
    });
});

// Check if user exists and validate password
// Store user token in database
//
// TODO
// Timeout the token
app.post('/signin', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
        message: 'Missing username/password'
    });
    return;
  }

  const db = admin.database();
  const userRef = db.ref('/user/' + req.body.username);
  let user;
  userRef.once('value')
    .then(function (snapshot) {
      if (!snapshot) {
        return Promise.reject(new Error('Invalid username'));
      }

      user = snapshot.val();
      return argon2.verify(user.password, req.body.password);
    })
    .then(function () {
      return admin.auth().createCustomToken(req.body.username);
    })
    .then(function (token) {
      user.token = token;
      return userRef.child('token').set({
        value: token,
        timestamp: admin.database.ServerValue.TIMESTAMP
      });
    })
    .then(function () {
      res.status(200).send({
        token: user.token
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: 'Invalid username/password'
      });
    });
});

// Invalidate the given token based on the given username
app.post('/signout', function (req, res) {
  if (!req.body.username || !req.body.token) {
    res.status(400).send({
      message: 'Missing username/token'
    });
    return;
  }

  const db = admin.database();
  const userRef = db.ref('/user/' + req.body.username);
  userRef.once('value')
    .then(function (snapshot) {
      const user = snapshot.val();
      if (!user || (user.token && user.token.value !== req.body.token)) {
        return Promise.reject(new Error('Invalid username/token'))
      }

      return userRef.child('token').set(null);
    })
    .then(function () {
      res.status(200).send({
        message: 'User signed out'
      });
      return true;
    })
    .catch(function () {
      res.status(400).send({
          message: 'Invalid username/token'
      });
    });
});

// Return profile info
app.post('/profile/:username', function (req, res) {
  if (!req.params.username || !req.body.token) {
    res.status(400).send({
      message: 'Missing username/token'
    });
    return;
  }

  const db = admin.database();
  db.ref('/user/' + req.params.username).once('value')
    .then(function (snapshot) {
      const err = new Error('Invalid username/token');
      if (!snapshot) {
        return Promise.reject(err);
      }
      const user = snapshot.val();
      if (!user ||
          !user.token ||
          user.token.value !== req.body.token ||
          isTokenInvalid(user.token)) {
        return Promise.reject(err);
      }

      res.status(200).send({
        username: req.params.username,
        email: user.email || '',
        file: user.file || {}
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: 'Invalid username/token'
      });
    });
});

// Submit a new comment
app.post('/comment/:file_id', function (req, res) {
  if (!req.params.file_id || !req.body.comment || !req.body.token) {
    res.status(400).send({
      message: 'Missing comment/file_id/token'
    });
    return;
  }

  const db = admin.database();

  // Find the user based on given token
  let username;
  getUserByToken(req.body.token)
    // find the file
    .then(function (user) {
      username = user.username;
      return db.ref('/file/' + req.params.file_id).once('value');
    })
    // add the comment
    .then (function (snapshot) {
      if (!snapshot || !snapshot.val()) {
        return Promise.reject(new Error('File doesn\'t exist'));
      }
      const newComment = db.ref('/comment/' + req.params.file_id).push();
      return newComment.set({
        user: username,
        content: req.body.comment,
        created: admin.database.ServerValue.TIMESTAMP
      });
    })
    .then(function () {
      res.status(200).send({
        message: 'Comment added'
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: (typeof error === 'object' && error.message) ?
                  error.message : 'Invalid file_id/token'
      });
    });
});

app.put('/user/:username/', function (req, res) {
  if (!req.params.username || !req.body.token) {
    res.status(400).send({
      message: 'Missing username/token'
    });
    return;
  }

  // Find the user based on given token
  const db = admin.database();
  const refUser = db.ref('/user/' + req.params.username);
  refUser.once('value')
    .then(function (snapshot) {
      const err = new Error('Invalid token');
      if (!snapshot) {
        return Promise.reject(err);
      }
      const user = snapshot.val();
      if (!user ||
          !user.token ||
          user.token.value !== req.body.token ||
          isTokenInvalid(user.token)) {
        return Promise.reject(err);
      }

      return refUser.child('email').set(req.body.email || '');
    })
    .then(function () {
      res.status(200).send({
        message: 'user info is updated'
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: (typeof error === 'object' && error.message) ?
                  error.message : 'Invalid username/token'
      });
    });
});

// Upload file
app.post('/file', function(req, res) {
  if (!req.body.name || !req.body.content || !req.body.token) {
    res.status(400).send({
        message: 'Missing name/content'
    });
    return;
  }

  const db = admin.database();
  let username;
  let newFileEntry;
  getUserByToken(req.body.token)
    .then(function (user) {
      username = user.username;
      newFileEntry = db.ref('/file').push();
      return newFileEntry.set({
        name: req.body.name,
        content: req.body.content,
        username: username,
        created: admin.database.ServerValue.TIMESTAMP
      });
    })
    // Save the unique file key and its filename for convenience
    .then (function () {
      const file_path = ['/user', username, 'file', newFileEntry.key].join('/');
      return db.ref(file_path).set(req.body.name);
    })
    .then(function () {
      res.status(200).send({
          id: newFileEntry.key,
          message: 'File created'
      });
      return true;
    })
    .catch(function (error) {
      res.status(403).send({
        message: (typeof error === 'object' && error.message) ?
                  error.message : 'Invalid token'
    });
  });
});

exports.api = functions.https.onRequest(app);
