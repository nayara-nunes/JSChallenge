/*Dada a string "javascript é divertido", utilize o método toUpperCase() para 
transformá-la em letras maiúsculas. Em seguida,utilize o método slice() para
pegar apenas os primeiros 10 caracteres e imprimir no console. */

// toUpperCase() -> transforma em letras maiúsculas 
// slice() -> extrai uma parte da string e retorna como uma nova string 
  let string = "javascript é divertido";
   string = string.toUpperCase().slice(0, 10)
   console.log(string);
    