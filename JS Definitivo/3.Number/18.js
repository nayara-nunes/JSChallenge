/*Crie uma função que recebe um número como parâmetro e retorna verdadeiro se ele é menor
 que zero, ou falso caso contrário.*/
let menorQueZero = (numero) =>{
  return numero < 0 ? true : false;
}

console.log(menorQueZero(1));
console.log(menorQueZero(-1))
console.log(menorQueZero(-2000))
console.log(menorQueZero(0))