/*14. Escreva um loop que calcule o maior elemento de um array de números. */

let maiorNumero = (array)=>{
  let numero = array;
  for(let i =1; i< array.length; i++){
     if(array[i] > numero ){
      numero = array[i] ;
     };
  }
  return numero;
}
console.log(maiorNumero());

let array = [1,2,3,4,5,6,90]