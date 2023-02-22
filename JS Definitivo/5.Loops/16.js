/*16. Escreva um loop que calcule a média de um array de números. */

let media = (arrayNotas)=>{
  let soma =0, mediaNota;
  let qtdd = arrayNotas.length;

for(let i =0; i< qtdd; i++){

  soma = soma + arrayNotas[i];
 

}
mediaNota = soma / qtdd;

return mediaNota.toFixed(3);
     

  }
const arrayNotas = [9, 8.6, 5.5, 3.4, 10, 8, 2.8]
console.log(media(arrayNotas));