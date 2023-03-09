const ROBOTS_TXT = 'https://instagram.com/robots.txt';

function doFetch(){

  fetch('https://instagram.com/robots.txt')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });


}

console.log(doFetch());