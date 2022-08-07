/* Crie uma função que dado dois valores mostre no console a soma, 
subtração, multiplicação e divisão desses valores */

let calculadora =(num1, num2) =>{
  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let mult = num1 * num2;
  let divisao =0;
  if( num2 == 0){
    console.log( " Não foi possivel realizar a divisão!")
  }else {
    divisao = num1/num2;
  }
 let resposta =`A soma dos números é ${soma}. A subtração dos números é ${subtracao}. 
 A multiplicação dos números é ${mult}. A divisão dos números é: ${divisao} `
 
  return resposta;
}

console.log(calculadora(12, 4))