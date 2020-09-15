const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  github_id: { type: Number, unique: true, required: true, dropDups: true},
  fullname: { type: String, unique: true, required: true, dropDups: true},
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

let save = (params) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  Repo.find({login: params.login}, function(result) {
    if (result) {
      return result;
    } else {
      return Repo.create([params]);
    }
  })
}

module.exports.save = save;