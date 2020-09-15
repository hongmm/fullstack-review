const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (/* TODO */ username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'POST'
    url: `api.github.com/search/repositories`,
    q: username,
    in: 'name',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  })

}

module.exports.getReposByUsername = getReposByUsername;