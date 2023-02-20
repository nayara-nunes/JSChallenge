/*Crie uma função que recebe dois números como parâmetros e retorna o menor deles.*/

let returnMenor = (num1, num2) => {

  if(num1 == num2){
    return "numeros iguais";

  } else if(num1 < num2){
    return num1;

  }else {
    return num2;
  }

}

console.log(returnMenor(2,2))
console.log(returnMenor(2,3))
console.log(returnMenor(6,2))