const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const argon2 = require('@phc/argon2');

// Add new user to the database
exports.signup = functions.https.onRequest(function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing username/password');
    return;
  }

  const db = admin.database();
  db.ref('/user/' + req.body.username)
    .once('value')
    .then(function (snapshot) {
      if (snapshot && snapshot.val()) {
        return Promise.reject(new Error('username is taken'));
      }

      return argon2.hash(req.body.password);
    })
    .then(function (hash) {
      db.ref('/user/' + req.body.username).set({
        password: hash
      });
      res.status(200).send('Created ' + req.body.username);
      return true;
    })
    .catch(function (error) {
      res.status(403).send('Invalid username/password');
    });
});

// Check if user exists and validate password
exports.auth = functions.https.onRequest(function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing username/password');
    return;
  }

  const db = admin.database();
  db.ref('/user/' + req.body.username)
    .once('value')
    .then(function (snapshot) {
      if (!snapshot) {
        return Promise.reject(new Error('Invalid username'));
      }

      const user = snapshot.val();
      return argon2.verify(user.password, req.body.password);
    })
    .then(function () {
      // TODO: Send a session token or cookie
      res.status(200).send('User is validated');
      return true;
    })
    .catch(function (error) {
      res.status(403).send('Invalid username/password');
    });
});
