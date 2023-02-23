//20. Mapear os elementos de um array para um novo array com base em uma função de transformação. */
const array = [45, 7, 8, 230, 12, 9, 91, 34, 78,95,1,2,0]
const quadrados = array.map((numero) => {
  return numero*numero;
})

console.log(quadrados)
console.log(quadrados.sort())