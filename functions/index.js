const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const argon2 = require('@phc/argon2');

exports.auth = functions.https.onRequest(function (req, res) {
  if (!req.body.password) {
    res.status(400).send('Invalid user info');
    return;
  }

  // TODO: store the hash in the db
  argon2.hash(req.body.password)
    .then(function (hash) {
      res.status(200).send(hash);
      return true;
    })
    .catch(function (error) {
      res.status(500).send('Cannot authenticate user');
    });
});
