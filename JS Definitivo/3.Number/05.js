/*Crie uma função que recebe um número como parâmetro e retorna verdadeiro se 
ele é ímpar, ou falso caso contrário.*/
let ehImpar =(numero) =>{
  return numero % 2 != 0? true: false;
}

console.log(ehImpar(120));
console.log(ehImpar(121));