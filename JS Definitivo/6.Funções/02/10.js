/*10. Escreva uma função que receba um array como parâmetro 
e retorne um novo array com os elementos do array original em ordem decrescente.  */
function ordenarDecrescente(arr) {
  return arr.sort((a, b) => b - a);
}
