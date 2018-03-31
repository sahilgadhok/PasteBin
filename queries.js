var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://filehub_admin:password@filehub.cekghi6bfi1x.us-east-2.rds.amazonaws.com:5432/filehub';
var db = pgp(connectionString);

// Query functions
function createUser(req, res, next) {
  req.body.id = parseInt(req.body.age);
  db.none('insert into users(id, username, password)' +
      'values(DEFAULT, ${username}, ${password})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'Success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
	createUser: createUser
}