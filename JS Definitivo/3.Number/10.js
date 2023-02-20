/*Crie uma função que recebe um número como parâmetro e retorna
 um array com todos os números inteiros menores ou iguais a ele.*/

 let retornaArray = (num)=>{
     let array = [];
     for (let i =1; i<= num; i++){
      array.push(i);
     }
return array;
 }


 console.log(retornaArray(5))