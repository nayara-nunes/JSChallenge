/*2. Escreva uma função que receba um número 
como parâmetro e retorne verdadeiro se o número for par e falso se o número for ímpar. */

let parOuImpar =(numero) =>{
  return numero %2 == 0 ? "verdadeiro" : "falso";
}

console.log(parOuImpar(12));
console.log(parOuImpar(5));