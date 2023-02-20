/*4 - Crie uma função que recebe uma string como parâmetro e retorna "verdadeiro" 
se ela contiver a letra "a", ou "falso" caso contrário.*/

let contemA = (string) =>{
  let stringA = "a";
  return string.includes(stringA);
}

console.log(contemA("erick"));