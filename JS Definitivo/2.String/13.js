/*Crie uma função que recebe uma string como parâmetro e retorna a string invertida.*/

let stringInvertida = (text)=>{
  let textInvertido = " "
  for( let i =text.length -1 ; i>=0 ; i--){
    textInvertido += text[i]
  }

  return textInvertido
}

console.log(stringInvertida("nayara erick"))