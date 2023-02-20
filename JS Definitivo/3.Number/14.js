/*Crie uma função que recebe um número como parâmetro e retorna a sua 
representação em notação científica.*/

let notacaoCientifica = (numero)=>{
  return numero.toExponential();
}


console.log(notacaoCientifica(1200000));