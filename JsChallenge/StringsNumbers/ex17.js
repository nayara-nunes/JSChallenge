  /*17.  Escreva uma função que recebe um array como argumento. 
   Extrai os três primeiros elementos de um e retorna o array resultante. */



   let Arg = (array)=>{
     for(let i =0; i< 3; i++){
        array.shift();
     }
     return  array;
   }
   console.log(Arg([1,2,3,4,5,8,10,12,15,16]));