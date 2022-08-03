// --------------  ARRAYS   -------------------

/* 1. Escreva uma função que recebe um array como argumento. 
Deve retornar true se todos os elementos do array forem iguais.Deve retornar false caso contrário. */

let arrayIgual = (array) =>{
  for(let i =0; i<array.length; i++){
         if(array[i] === array[i+1]){
          return true;
         } else{
          return false;
         }
  }
}
console.log(arrayIgual([1,2,3,4,5,6,7,8,9,10]))
console.log(arrayIgual([1,1,1,1,1]))

/* 2. Escreva uma função que recebe um array como argumento. Retorna o número de elementos de um. */
let contaArray = (array) =>{
  return array.length;
}

console.log(contaArray([1,2,3,4,5,6,7,8,9,10])) 
console.log(contaArray(["banana", "macarrão", "oleo", "arroz"])) 
  
/*3. Escreva uma função que recebe um array de números como argumento. 
Retorna o número de valores negativos no array 
 */

 let contaNegativos = (array) =>{
     let cont = array.filter(number => number < 0)
   return cont.length;
}
console.log(contaNegativos([1,-2,3, -4]));

/* Escreve uma função que receba dois números, digamos, min e max como argumentos. 
Retorna um array de números no intervalo de min e max.  */

let intervaloArray = (min, max) =>{
    let array = [];
    for(let i =0; i<10; i++){
      array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
   return array;

}

console.log(intervaloArray(5, 15));

/* Escreva uma função que recebe um array com elementos arbitrários e um número como argumentos.
 Retorna um novo array, o primeiro elemento deve ser o próprio número fornecido, ou zero se
  o número for menor que 6. Os outros elementos devem ser os elementos do array original. */

  let arrayNovo =(array,num)=>{
    let novoArray = array.slice();
    if(num < 6){
      novoArray.unshift(0)
    }else{
      novoArray.unshift(num);
    }

    return novoArray;
  }

  console.log(arrayNovo([1,2,3,4,5], 8));

  /* Escreva uma função que recebe um array
   e um valor como argumentos. Salva cada enésimo elemento em um novo array. 
   Retorna o novo array */

   let adicionaItens = (array, num) =>{
    let arrayNovo = array.slice();
    arrayNovo.push(num)

    return  arrayNovo;
   }

   console.log(adicionaItens([2,3,4,5,23], 123));

   /* Escreva uma função que recebe um array como argumento. 
   Extraia os 3 primeiros elementos de um. E retorna o array resultante */

   let retiraArray = (array) =>{
     for(let i=0; i<3; i++){
      array.shift();
     }
     return array;
   }

   console.log(retiraArray([1,2,3,4,5,8,10,12,15,16]));

   /* Escreva uma função que recebe um array como argumento.
    Extrai os ultimos elementos de um. Retorna o array resultante. */
let retiraFinal = (array) =>{
  for(let i=0; i<3; i++){
    array.pop();
   }
   return array;
}
console.log(retiraFinal([1,2,3,4,5,8,10,12,15,16]));

/* Escreva uma função que recebe um array e um valor como argumento.
    Retorna o enésimo elemento de 'a'. */

    let retornaElemento = (array, indice) =>{
        return array[indice];
    }

    console.log(retornaElemento(["a", "b","c", "d", "e", "f","g","h","i"], 2));

    /* Escreva uma função que recebe um array de strings como argumento. 
    Agrupa essas strings pela primeira letra.
     Retorna  um objeto que contém propriedades com chaves representando as primeiras letras.
     Os valores devem ser arrays de strings contendo apenas as strings correspondentes: ["Alf", "Alice", "Bem"]
     deve ser transformado em {a:["Alf, "Alice], b:["Bem"]}  */

     