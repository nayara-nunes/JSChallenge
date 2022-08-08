// Crie uma função para verificar se um valor é Truthy

let verifica =(num)=>{
  if(num){ 
    return true;
  }else{
    return false;
  }
}
console.log(verifica("andre"))

// Crie uma função matemática que retorne o perímetro de um quadrado 
let perimetro = (lado) =>{
 return lado *4;
}
console.log(perimetro(2))
/* Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome*/
let nomeCompleto = (nome, sobrenome) =>{
  return `O seu nome completo é: ${nome} ${sobrenome}`
}

console.log(nomeCompleto("nayara", "nunes"))
// Crie uma função que verifica se um número é par
let numeroPar = (num)=>{
   return num%2==0 ? "Par": "Não é par"
}
console.log(numeroPar(5))
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
 let tipoDado =(dado)=>{
  return typeof(dado);
 }
 console.log(tipoDado("string?"));

/* addEventListener é uma função nativa do JavaScript o primeiro parâmetro é
 o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome 
 completo quando o evento 'scroll' ocorrer.*/




