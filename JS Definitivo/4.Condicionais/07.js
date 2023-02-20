/* 7 - Crie uma função que recebe um número como parâmetro e retorna "par" se ele for par,]
 ou "ímpar" caso contrário. */

 let parOuImpar = (numero)=>{
   if(numero % 2 ==0){
    return "par";
   }else{
    return "ímpar"
   }

 }

 console.log(parOuImpar(12));
 console.log(parOuImpar(11));