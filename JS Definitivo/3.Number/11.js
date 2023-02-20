/*Crie uma função que recebe um número como parâmetro e retorna a sua representação em binário.*/
let binario = (decimal) =>{


  return (decimal >>> 0).toString(2);
}


console.log(binario(12))