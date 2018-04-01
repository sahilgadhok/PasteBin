const express = require('express');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const app = express();
var connectionString = 'postgres://filehub_admin:password@filehub.cekghi6bfi1x.us-east-2.rds.amazonaws.com:5432/filehub?ssl=1';
var db = pgp(connectionString);

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/'));

app.post('/signup', (req, res) => {
  const p = db.none('INSERT INTO users(user_id, username, password) values(DEFAULT, ${username}, ${password})',
    {username: req.body.username, password: req.body.password})
    .then(function () {
      res.status(200)
        .json({
          status: 'Success',
          message: 'Inserted one user'
        });
    }).catch(function(err) {
      console.log(err);
    });
    return p;
});

app.get('/signin', (req, res) => {
  console.log(req);
  const p = db.any('SELECT * from users WHERE username=${username} AND password=${password}',
    {username: req.params.username, password: req.params.password})
    .then(function (data) {
      res.status(200)
        .json({
          status: 'Success',
          user: data
        })
    }).catch(function(err) {
      console.log(err);
    });
    return p;
});

app.listen(3000);

console.log("Serving app on port 3000...");
