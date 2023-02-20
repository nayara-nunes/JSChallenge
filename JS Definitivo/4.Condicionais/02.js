/* 2 - Crie uma função que recebe uma string como parâmetro e retorna "sim"
  se ela for igual a "sim" ou "SIM", ou "não" caso contrário. */

  let compara = (string) =>{
    if( string === "sim" || string === "SIM"){
      return "sim"
    }else {
      return "não"
    }

  }

  console.log(compara("sim"))
  console.log(compara("SIM"))
  console.log(compara("não"))