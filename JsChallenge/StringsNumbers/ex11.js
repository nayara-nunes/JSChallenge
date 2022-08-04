
 /*11. Escreva uma função que receba um número como argumento.
  Divide a em seus dígitos individuais e os retorna em um array */
let transform = (number) =>{
  return number.toString().split(",");
}

console.log(transform(123456))