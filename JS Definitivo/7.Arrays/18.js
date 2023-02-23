//18. Encontre o elemento com o menor valor em um array.

const array = [45, 7, 8, 230, 12, 9, 91, 34, 78,95,1,2,0]

const menor = array.reduce((acumulado, atual)=>{
  return acumulado < atual ? acumulado : atual;
});

console.log(menor)