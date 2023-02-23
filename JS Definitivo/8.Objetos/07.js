//7. Verifique se uma propriedade específica está presente no objeto.
let pessoa ={
  nome : 'Marcela',
  idade : 36,
  cidade : 'London',
  cpf: 10835662698,
}



console.log(pessoa.hasOwnProperty("idade"))

// objeto.hasOwnProperty(chave) => retorna true se o objeto contém a chave especificada.