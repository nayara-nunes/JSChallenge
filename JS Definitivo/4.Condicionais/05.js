/* 5 - Crie uma função que recebe um número como parâmetro e
 retorna "verdadeiro" se ele for múltiplo de 3 ou de 5, ou "falso" caso contrário.*/

 let multiplo3Ou5 = (numero) =>{
  if((numero % 3 == 0)|| (numero % 5 == 0)){
    return "verdadeiro"
  }else{ 
    return "falso"
  }
 }

  console.log(multiplo3Ou5(120));
  console.log(multiplo3Ou5(121));
  console.log(multiplo3Ou5(125));