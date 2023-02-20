/*Crie uma função que recebe duas strings como parâmetros e retorna 
verdadeiro se a primeira string contém a segunda, ou falso caso contrário.*/
let contemString = (texto,stringProcurada) => {
  return texto.includes(stringProcurada);

}

let texto = "javascript é linguagem fracamente tipada, mas bem divertida "
let stringProcurada = "bemo";

console.log(contemString(texto, stringProcurada))