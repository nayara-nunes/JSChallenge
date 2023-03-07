/*7. Escreva uma função que receba um array como parâmetro e retorne um novo array com os elementos do array original que são pares. */
function retornarPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(retornarPares([1, 2, 3, 4, 5, 6, 7, 8, 9]))