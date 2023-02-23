//20. Liste todas as propriedades de um objeto aninhado. 
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
console.log(Object.keys(pessoa1.address) );