//12. Mescle dois objetos em um só.
const pessoa ={
  endereço : 'Avenida José de Alencar',
  numero : 360,
  bairro : 'London',
  cep: 10835662698,
}

const pessoa1 ={
  nome : 'Katherine',
  idade : 24,
  cidade : 'Oslo',
  cpf: 10835662698,

}

// usando o método Object.assign() => para mesclar dois objetos em um só.

const objetoUnico = Object.assign(pessoa, pessoa1);

console.log(objetoUnico);