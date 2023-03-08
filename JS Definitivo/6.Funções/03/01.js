/*1. Escreva uma função que 
receba um número como parâmetro e retorne verdadeiro se o número for primo e falso caso contrário. */
function ehPrimo(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(ehPrimo(121));
console.log(ehPrimo(2));