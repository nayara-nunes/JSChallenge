/*Crie uma função que recebe uma string como parâmetro e retorna um 
array com as palavras da string.*/


let transformaArray = (string)=>{
  // remove espaços em branco no início e fim da string
  string = string.trim();

  // quebra a string em palavras usando espaço em branco como delimitador 
  const array = string.split(/\s+/);
  return array;

}

console.log(transformaArray(" a lista de palavras em um array são essas"))