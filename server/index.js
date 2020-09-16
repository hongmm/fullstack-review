const express = require('express');
const index = require('../database/index.js');
const github = require('../helpers/github.js');
const bodyParser = require('body-parser');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  var username = req.body.searchTerm;
  github.getReposByUsername(username, function(results) {
    results.forEach(repo => {
      index.save(repo)
      .then(result => {
        console.log('Saved: ' + result);

        res.status(200);
        res.send(result + ' saved!');
      })
      .catch(error => {
        console.log(error);
        res.status(404);
        res.send(error);
      })
    });
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  index.getMostPopularRepos()
    .then(result => {
      res.status(200);
      res.send(result);
    }).catch(error => {
      console.log(error);
      res.status(404);
      res.send(error);
    })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

