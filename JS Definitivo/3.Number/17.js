/*Crie uma função que recebe um número como parâmetro e retorna verdadeiro
 se ele é maior que zero, ou falso caso contrário.*/
let ehMaiorQueZero = (numero)=>{
  return numero > 0 ? true : false;
}

console.log(ehMaiorQueZero(1));
console.log(ehMaiorQueZero(-1))
console.log(ehMaiorQueZero(-2000))
console.log(ehMaiorQueZero(0))