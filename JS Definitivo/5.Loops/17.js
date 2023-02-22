/*17. Escreva um loop que encontre o primeiro elemento de um array de números que seja par. */

let encontre1par =(arrayNumeros)=>{
  let primeiroPar, i =0;

  while(i < arrayNumeros.length){
    if(arrayNumeros[i] % 2 ==0){
      primeiroPar = arrayNumeros[i];
      return primeiroPar;
      break;
    }
    i++;
  }


}


const arrayNumeros = [3,5,5,7, 99, 13, 15, 17, 2]

console.log(encontre1par(arrayNumeros))
