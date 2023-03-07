/*8. Escreva uma função que receba um array como parâmetro e retorne um
 novo array com os elementos do 
array original que são ímpares. */
function retornarImpares(arr) {
  return arr.filter(num => num % 2 !== 0);
}
