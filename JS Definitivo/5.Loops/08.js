/*8. Escreva um loop que exiba os números de 0 a 100, 
mas que pare a execução do loop caso o número seja 42. */
let write0a100 = ()=>{
  for(let i=0; i<=100; i++){
     if(i== 42){
      console.log("Vixi!")
      break;
     } else{
      console.log(i)
     }



  }
}

console.log(write0a100());