/*9. Escreva uma função que receba um array como
 parâmetro e retorne a soma dos elementos do array. */
 function somarArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
