/*9. Escreva um loop que exiba os números de 1 a 100, 
substituindo os múltiplos de 3 por "Fizz" e os múltiplos de 5 por "Buzz". */
let substitua3e5 = ()=>{
  for(let i=1;i<100; i++){
    if(i % 3==0){
      console.log("Fizz");
    }else if(i % 5 ==0){
      console.log("Buzz");
    }else{
      console.log(i)
    }

  }
 
}

console.log(substitua3e5())