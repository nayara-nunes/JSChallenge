//19. Filtrar os elementos de um array que atendem a uma condição.
/* Filtrar em um array os elementos que são pares, retorne o array de pares  */
const array = [45, 7, 8, 230, 12, 9, 91, 34, 78,95,1,2,0]

const pares = array.filter((numero)=>{
   return numero %2 ===0;
});

console.log(pares)