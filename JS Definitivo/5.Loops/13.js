/*13. Escreva um loop que exiba os caracteres de uma string ao contrário. */

let stringAoContrario = (text)=>{
  let novaString = "";
  for(let i =text.length -1 ; i>=0 ; i--){
    novaString += text[i]; 

  }

  return novaString;
}

console.log(stringAoContrario("nayara"));