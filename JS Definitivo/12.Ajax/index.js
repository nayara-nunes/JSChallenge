//AJAX
function doAjax(){
 var XMLHttpRequest = require('xhr2');
const CODE_READY= 4;
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
  if(this.readyState === CODE_READY){
console.log('this.readyState', this.responseText)
  }
    
}

xhttp.open("GET", 'https://instagram.com/robots.txt');
xhttp.send();
}setTimeout(doAjax, 5*1000)


console.log('@nayaranunes.dev')


