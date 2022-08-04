

 /* 6. Escreva uma função que receba 6 valores (a,b,c,d,e,f) como argumentos: 
  * Soma a e b;
  * Substraia por c;
  * Multiplica por d e divide por e;
  * * Finalmente aumenta a f e retorna o resultado.*/

let expression = (a,b,c,d,e,f)=>{
  let result = (((((a + b) - c) * d) / e) + f);
     return result;
}

console.log(expression(1,6,3,4,5,6));