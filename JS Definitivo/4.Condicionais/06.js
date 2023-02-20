/* 6 - Crie uma função que recebe dois números
 como parâmetros e retorna "igual" se eles forem iguais, "diferente" caso contrário. */
 let comparaNumeros = (num1, num2) =>{
  if( num1 == num2){
    return "igual"
  }else {
    return "diferente"
  }
 }

 console.log(comparaNumeros(23, 23));