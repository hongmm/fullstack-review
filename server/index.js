const express = require('express');
const index = require('../database/index.js');
const github = require('../helpers/github.js');
const bodyParser = require('body-parser')
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  console.log('server index js')
  //console.log(req);
  console.log(JSON.stringify(req.body));

  // req should have in its body the username

  //github.getReposByUsername(username);

  // save info to database
  //index.save();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

