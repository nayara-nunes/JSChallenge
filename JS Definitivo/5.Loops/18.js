/*18. Escreva um loop que encontre o primeiro
 elemento de um array de números que seja maior que 10. */
 
 let encontreMaiorQ10 =(numeros)=>{
    let _1maiorQ10, i=0;

    while( i < numeros.length){
      if(numeros[i] > 10){
        _1maiorQ10 = numeros[i];
        console.log(_1maiorQ10)
        break; // sai do laço ao encontrar o primeiro número maior que 10
      }
      i++;
    }
   

    }
const numeros =[5,8,12,6,15,2]
 
    console.log(encontreMaiorQ10(numeros));