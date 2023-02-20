/*Crie uma função que recebe uma string como parâmetro e retorna o
 número de ocorrências da letra "a" na string.*/

let numeroDeOcorrencias = (texto) =>{
  let cont = 0;
   for(let i=0; i<texto.length; i++){
       if(texto[i] === "a"){
        cont++;
       }
   }
return cont;
}

console.log(numeroDeOcorrencias("nayara tamiris nunes pinto, erick alves pereira"))