/* Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores. */

let division = (div, divisor) =>{
  let resto = div % divisor;
  let result= ~~ div/divisor;
  
  return console.log( ` O resultado da divisão ${result}. E o resto da divisão: ${resto}`)
}

console.log(division(12, 5))