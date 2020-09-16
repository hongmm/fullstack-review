const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
  .then(function(response) {
    callback(response.data);
  }).catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      callback(error.response);
    } else if (error.request) {
      console.log(error.request);
      callback(error.request);
    } else {
      console.log('Error', error.message);
      callback(error.message);
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;