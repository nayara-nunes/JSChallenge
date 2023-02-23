//16. Acesse uma propriedade de um objeto aninhado.
const pessoa1 ={
  nome : 'Katherine',
  idade : 24,
  cidade : 'Oslo',
  cpf: 10835662698,
   address: {
    endereço : 'Avenida José de Alencar',
    numero : 360,
    bairro : 'London',
    cep: 10835662698,
  }

}

//Acessando a propriedade do objeto aninhado:
console.log(pessoa1.address.endereço);