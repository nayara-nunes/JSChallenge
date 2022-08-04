
 /*4. Escreva uma função que receba uma string como argumento. 
 Extrai os últimos 3 caracteres da string. Retorna o resultado.*/

let extrai = (string) =>{
  return string.slice(0, -3);
}

console.log(extrai('juliana'));