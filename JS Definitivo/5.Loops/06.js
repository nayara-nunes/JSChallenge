/*6. Escreva um loop que calcule o fatorial de um número dado. */
let fatorial = (num)=>{
  let mult =1;
for(let i =1; i<=num; i++){
   mult = mult *i; 
}
return mult;
}


console.log(fatorial(8));