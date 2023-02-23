//17. Encontre o elemento com o maior valor em um array.
const array = [45, 7, 8, 230, 12, 9, 91, 34, 78,95,1,2,0]

const maior = array.reduce((acumulado, atual)=>{
  return acumulado > atual ? acumulado : atual;
});

console.log(maior)