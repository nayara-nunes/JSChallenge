/* 1 - Crie uma função que recebe um número como parâmetro e retorna "positivo"
 se ele for maior que zero, "negativo"
 se ele for menor que zero e "zero" caso contrário. */

 let positivoNegativo =(numero)=>{
  if(numero > 0){
    return "positivo";
  }else if( numero < 0){
    return "negativo"
  }else{
    return "zero"
  }
 }

 console.log(positivoNegativo(1))
 console.log(positivoNegativo(-251))
 console.log(positivoNegativo(0))