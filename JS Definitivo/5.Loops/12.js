/*12. Escreva um loop que exiba os números primos de 1 a 100. */
let numerosPrimos =()=>{
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
  
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log(i);
    }
  }
  
}

console.log(numerosPrimos())