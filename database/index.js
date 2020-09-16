const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true });

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

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var schemaFormattedRepo = {
    'github_id': repo.id,
    'fullname': repo.full_name,
    'description': repo.description,
    'login': repo.owner.login,
    'url': repo.url,
    'created_at': repo.created_at,
    'ranking_metadata': {
      'forks_count': repo.forks_count,
      'stargazers_count': repo.stargazers_count,
      'watchers_count': repo.watchers_count,
      'subscribers_count': repo.subscribers_count
    }
  }
  return Repo.create(schemaFormattedRepo);
}

let getMostPopularRepos = () => {
  return Repo.find({}).sort(
    {
      'ranking_metadata.forks_count': -1,
      'ranking_metadata.stargazers_count': -1,
      'ranking_metadata.watchers_count': -1,
      'ranking_metadata.subscribers_count': -1
    }).limit(25);
}

module.exports.save = save;
module.exports.getMostPopularRepos = getMostPopularRepos;