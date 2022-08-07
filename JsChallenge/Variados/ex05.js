/* Desenvolva uma função JS para que ela receba um valor como 0.30000000000004 e retorne R$0,30   */
let converteDin =(numero)=>{
  numero = numero.toFixed(2);

  return `R$${numero}`;
}

console.log(converteDin(0.30000000000004))
  
