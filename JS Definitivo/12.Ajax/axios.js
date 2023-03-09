

let axios = require('axios');

axios.get('https://instagram.com/robots.txt')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
