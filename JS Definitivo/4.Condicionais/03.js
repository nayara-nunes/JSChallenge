/*3 - Crie uma função que recebe uma string 
como parâmetro e retorna "vogal" se ela for uma vogal, ou "consoante" caso contrário. */

let classifiqueLetras =(string)=>{
if (string == "a" ||string == "e" || string == "i" || string == "o" || string == "u"){
  return "vogal"
}else{
  return "consoante"
}

}

console.log(classifiqueLetras("c"))
console.log(classifiqueLetras("a"))
