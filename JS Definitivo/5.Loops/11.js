/*11. Escreva um loop que exiba a sequência de Fibonacci até o décimo termo.
 */
let fibonacci = ()=>{
  let a = 0, b = 1;
  for (let i = 2; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }

}

console.log(fibonacci())