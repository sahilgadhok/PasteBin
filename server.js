const express = require('express');
const pgp = require('pg-promise')();
const app = express();
var connectionString = 'postgres://filehub_admin:password@filehub.cekghi6bfi1x.us-east-2.rds.amazonaws.com:5432/filehub';
var db = pgp(connectionString);

app.use('/', express.static(__dirname + '/'));

app.post('/signup', (req, res) => {
  db.none('INSERT INTO users(user_id, username, password) values(DEFAULT, $1, $2)',
    [req.username, req.password])
    .then(function () {
      res.status(200)
        .json({
          status: 'Success',
          message: 'Inserted one user'
        });
    }).catch(function(err) {
      console.log(err);
    });
});

app.listen(3000);

console.log("Serving app on port 3000...");
