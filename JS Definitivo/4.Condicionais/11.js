/*  11 - Crie uma função que recebe uma string como parâmetro e retorna "curta" 
se ela tiver menos de 10 caracteres, "longa" se ela tiver mais de 20 caracteres, ou 
"média" caso contrário.   
*/

let tamanhoString = (string)=> {
  if(string.length < 10){
    return "curta";
  }else{
    return "longa";
  }
}

console.log(tamanhoString("nayara"))
console.log(tamanhoString("erickalvespereira"))