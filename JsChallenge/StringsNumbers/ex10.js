
 /*10. Escreva uma função que recebe um número como argumento. 
 Arredonda a para o 2° digito após a virgula. Retorna o número arredondado. */
let arredondamento = (numero)=>{
  return numero.toFixed(2);
}

console.log(arredondamento(123.4567))