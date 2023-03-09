// timers

setTimeout(function(){

},1000 );
// 1000 unidades é igual a 1s
console.log()

function showMessage() {
  console.log("Olá, mundo!");
}

const timer = setTimeout(showMessage, 3000);
clearTimeout(timer);


function showMessage() {
  console.log("Olá, mundo!");
}

const timer2 = setInterval(showMessage, 2000);
setTimeout(() => {
  clearInterval(timer2);
}, 10000);
