//18. Adicione uma nova propriedade a um objeto aninhado.
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
pessoa1.address.complemento = 'Casa no fim do beco, arvore na frente'

//Acessando a propriedade do objeto aninhado:
console.log(pessoa1.address);