/*Crie uma função que recebe um número como parâmetro e retorna verdadeiro 
se ele é um número inteiro, ou falso caso contrário.*/
let ehInteiro =(numero)=>{
return Number.isInteger(numero);
}

console.log(ehInteiro(123.56));