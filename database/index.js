const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const github = require('../helpers/github.js');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  github_id: { type: Number, unique: true, required: true, dropDups: true},
  //name: String
  fullname: { type: String, unique: true, required: true, dropDups: true}
  description: String,
  login: String,
  url: String,
  created_at: String,
  ranking_metadata: {
    forks_count: Number,
    stargazers_count: Number,
    watchers_count: Number,
    subscribers_count: Number
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  var Repo.find({login: username})


}

module.exports.save = save;