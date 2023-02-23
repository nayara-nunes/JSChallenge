//11. Copie o objeto para um novo objeto.
const pessoa ={
  nome : 'Marcela',
  idade : 36,
  cidade : 'London',
  cpf: 10835662698,
}


// Existem algumas maneiras de copiar um objeto para um novo objeto
/*1. Atribuição por espelhamento (spread Operator) */
const pessoa1 = {...pessoa};
console.log(pessoa1)

/* 2. Usando Object.assign() */
const objeto = { a: 1, b: 2, c: 3 };
const newObj = Object.assign({}, objeto);
console.log(newObj); // { a: 1, b: 2, c: 3 }
