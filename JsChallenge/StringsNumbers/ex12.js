
  /*12. Escreva uma função que receba dois números. Verifica-se x é divisivel por y.
   Se sim X. Se não retorna o próximo natural mais alto que é divisivel por y*/

let proxDivisivel =( x, y) =>{
    const q = ~~(x/y);
    if(x%y === 0){
       return x;
    }else {
      let resto = (x*y) > 0 ?(y * (q + 1)) : (y*(q-1));
      return resto;
    }
   
  }
  
  console.log(proxDivisivel(12, 4));
