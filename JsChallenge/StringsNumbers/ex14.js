
   /*14.Escreva uma função que receba dois números (a e b) como argumentos. Se a for menor que b, 
   divide a por b.Caso contrário, multiplique os dois números. Retorna o valor resultante.*/

let  operacao = (a, b)=>{
 return  a < b ? a/b: b*a
}

console.log(operacao(3, 4))