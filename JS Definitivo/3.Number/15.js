/*Crie uma função que recebe um número como parâmetro e retorna verdadeiro se ele é um 
número finito, ou falso caso contrário.*/
let finito = (numero)=>{
  return isFinite(numero) ? true: false;
}

console.log(finito(3.1));