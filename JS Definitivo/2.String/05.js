/* Dada a string "javascript é divertido", utilize o método split()
  para separar a string em um array de strings, onde cada palavra é um elemento do array.
  Em seguida, utilize o método join() para juntar as palavras novamente em uma string, 
  separadas por vírgula, e imprimir a string resultante no console.*/
 
  // split -> divide a string em substring com um separador especificado 

let string = "javascript é divertido";
console.log(string.split(" ").join(","))
