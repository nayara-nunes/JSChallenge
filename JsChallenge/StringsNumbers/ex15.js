
   /* 15. Escreva uma função que recebe duas strings (a e b) como argumentos. 
   Retorna o número de vezes que a ocorre em b.*/
let repetion = (a, b) =>{
   return b.split(new RegExp('\\'+a, "gi" )).length - 1
}

console.log(repetion('a','banana' ))