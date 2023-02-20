/*Dada a string "     javascript é divertido!    ", utilize o método trim() 
para remover os espaços em branco do começo e do final da string. Em seguida,
 utilize o método replace() para substituir a palavra "divertido" por "incrível" e
  imprimir a string resultante no console. */
     

  // trim -> remove espaços em branco
  // replace -> substitui uma parte da string 



  let string = "     javascript é divertido!     "
   
  string = string.trim().replace("divertido", "incrível")
   console.log(string)
 
