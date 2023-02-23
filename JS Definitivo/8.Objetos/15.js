//15. Converta um objeto em uma string JSON.

// usando o método JSON.stringify() que converte um objeto JS em uma string JSON

const pessoa ={
  endereço : 'Avenida José de Alencar',
  numero : 360,
  bairro : 'London',
  cep: 10835662698,
}

const myJSON = JSON.stringify(pessoa);

console.log(myJSON);