// Arrays built in methods 

//Concat => Concatena no array passado, não modifica o original, apenas cria outro e retorna 
let array = ["maçã", "pêra", "melão", "abacaxi", "morango", "uva"];
let novoArray = array.concat("tomate", "caqui");
console.log(novoArray) 


/******************BUSCA NO ARRAY********************* */
// Find -> Faz uma consulta no array e retorna a primeira ocorrência 
const data = [1, 12, 15,16, 20, 37,40,37];
const result = data.find(function (item){
  return item > 20;
});
console.log(result);

// findIndex()  -> Retorna o index da consulta 
const index = data.findIndex(function(item){
  return item >37;
})

console.log(index)

// indexOf() -> retorna o index do item

console.log( data.indexOf(20));

// lastIndexOf() -> retorna o index da ultima ocorrencia
console.log(data.lastIndexOf(37))


// includes -> busca no array, retorna true ou false;
console.log(data.includes(4))


/******************** MANIPULAÇÃO NO ARRAY *************************/

// pop -> adiciona no 
let lista = ["maçã", "pêra", "melão", "abacaxi", "morango", "uva"];
console.log(lista.pop())
// push
console.log(lista.push("kiwi"))
// shift
console.log(lista.shift())
//unshift
console.log(lista.unshift("banana"))

// some ->verifica se pelo menos um se encaixa na condição
console.log(lista.some(function(item){
  return item ==="kiwi"
}))

//every -> verifica se todos os elementos se encaixam na condição
console.log(lista.every(function(item){
  return item ==="kiwi"
}))

/*slice -> recorta o array, recebe dois parametros o primeiro de onde começa, 
incluindo a posição do primeiro parametro e o segundo não incluindo, onde termina.*/

console.log(lista.slice(4, 6))
// splice ->

//map -> Faz um loop num array

//forEach -> Loop num array 

let dataNovo = data.map(function(item){
 return item * item;
})
console.log(dataNovo)

