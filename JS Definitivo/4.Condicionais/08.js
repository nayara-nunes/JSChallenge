/* 8 - Crie uma função que recebe um número como parâmetro e retorna 
"maior que 10" se ele for maior que 10, "menor que 10" caso contrário. */

let maiorOuMenor = (numero)=>{
  return numero > 10 ? "maior que 10" : "menor que 10"
}

console.log(maiorOuMenor(12))
console.log(maiorOuMenor(1))