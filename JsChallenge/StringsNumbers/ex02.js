/*2. Escreva uma função que receba dois valores, digamos a e b, como argumentos.
 Retorna true se os dois valores forem iguais e do mesmo tipo. */

let comparacao = (a, b) =>{
  return a ===b ? true: false;
}

console.log(comparacao('abcde', 'abcde'));