/*
Crie uma função que recebe uma string como parâmetro e retorna verdadeiro
 se a string é um palíndromo (ou seja, se ela é a mesma se lida da esquerda para a 
  direita ou da direita para a esquerda), ou falso caso contrário.
*/



let verificaPalindromo = (string) => {
    // inverte a string
    let stringInvertida = ""
     for( let i = string.length -1; i>=0 ; i--){
        stringInvertida += string[i];
     }
     

    // compara uma da outra 
    return stringInvertida === string; 
}

console.log(verificaPalindromo("anilina"))