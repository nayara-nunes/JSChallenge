/*Crie uma função que recebe um número como parâmetro e retorna o seu valor absoluto.*/
let valorAbsoluto = (numero) =>{
  return numero < 0 ? numero * -1: numero; 
}

console.log(valorAbsoluto(-25));
console.log(valorAbsoluto(3));