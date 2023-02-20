/* 10 - Crie uma função que recebe um número como parâmetro e retorna "Aprovado" 
se ele for maior ou igual a 7,
 "Recuperação" se ele estiver entre 5 e 7, ou "Reprovado" caso contrário. */
 let aprovadoReprovado = (nota) =>{
  if( nota >= 7){
    return "Aprovado";

  }else if( nota >=5 ){
    return "Recuperação"
  }else{
    return "Reprovado"
  }

 }

 console.log(aprovadoReprovado(7));
 console.log(aprovadoReprovado(3));
 console.log(aprovadoReprovado(5));
