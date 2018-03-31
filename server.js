const express = require('express');
const db = require('./queries');
const app = express();

app.use('/', express.static(__dirname + '/'));

app.post("/signup", (req, res, next) => {
  db.createUser(req, res, next);  
});

app.listen(3000);

console.log("Serving app on port 3000...");
