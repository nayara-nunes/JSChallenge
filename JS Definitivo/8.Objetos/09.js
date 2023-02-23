//9. Liste todos os valores das propriedades do objeto.
let pessoa = {
  nome : 'Marcela',
  idade : 36,
  cidade : 'London',
  cpf: 10835662698,
};

for(let propriedade in pessoa){
  console.log(pessoa[propriedade]);
}

/* Para listar os valores das propriedades de um objeto, você pode usar um loop `for ... in` 
para percorrer todas as propriedades do objeto e imprimir seus valores*/
