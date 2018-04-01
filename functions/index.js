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

// Add new user to the database
app.post('/signup', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
        message: 'Missing username/password'
    });
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
      if (user.token) {
        return Promise.resolve(user.token);
      }
      return admin.auth().createCustomToken(req.body.username);
    })
    .then(function (token) {
      userRef.child('token').set(token);
      res.status(200).send({
        token: token
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
      if (!user || user.token !== req.body.token) {
        return Promise.reject(new Error('Invalid username/token'))
      }

      userRef.child('token').set(null);
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

exports.api = functions.https.onRequest(app);