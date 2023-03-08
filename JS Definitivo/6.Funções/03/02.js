/*

2. Escreva uma função que receba 
um array de números como parâmetro e retorne um novo array com os números únicos do array original.
 */

function numerosUnicos(array) {
  let contagem = {};
  // contar quantas vezes cada número aparece no array
  for (let num of array) {
    if (contagem[num]) {
      contagem[num]++;
    } else {
      contagem[num] = 1;
    }
  }
  // extrair os números únicos do objeto contagem
  let unicos = [];
  for (let num in contagem) {
    if (contagem[num] === 1) {
      unicos.push(parseInt(num));
    }
  }
  return unicos;
}

// Exemplo de uso:
let numeros = [1, 2, 2, 3, 4, 5, 5, 5];
let unicos = numerosUnicos(numeros);
console.log(unicos); // [1, 3, 4]
