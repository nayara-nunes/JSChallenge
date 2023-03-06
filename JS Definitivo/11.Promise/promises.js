/*Qual é a sintaxe básica para criar uma Promise?
javascript
*/
const myPromise = new Promise((resolve, reject) => {
  // código que pode levar tempo para executar
  if (/* tudo ocorreu conforme esperado */) {
    resolve(/* resultado */);
  } else {
    reject(/* motivo do erro */);
  }
});
/*Como usar o método .then() para manipular o resultado de uma Promise?
javascript
*/
myPromise.then(resultado => {
  // código a ser executado com o resultado
}).catch(erro => {
  // código a ser executado caso ocorra um erro
});
/*Como usar o método .catch() para lidar com erros em uma Promise?
javascript
*/
myPromise.catch(erro => {
  // código a ser executado caso ocorra um erro
});
/*O que acontece se uma Promise é rejeitada e não tem um método .catch() para lidar com o erro?
A Promise irá gerar um erro não tratado, que pode causar problemas no programa.

Como criar uma Promise que espera um certo tempo antes de ser resolvida?
*/
const espera = ms => new Promise(resolve => setTimeout(resolve, ms));

espera(2000).then(() => {
  // código a ser executado após 2 segundos
});
//Como criar uma Promise que depende do resultado de outra Promise?

const promise1 = new Promise(resolve => {
  // código que retorna um resultado
  resolve(/* resultado */);
});

const promise2 = promise1.then(resultado1 => {
  // código que usa o resultado da promise1
  return /* novo resultado */;
});

promise2.then(resultado2 => {
  // código que usa o resultado da promise2
});
//Como criar uma Promise que executa várias tarefas assíncronas em paralelo e retorna o resultado quando todas terminarem?

const promises = [
  /* array com várias promises */
];

Promise.all(promises)
  .then(resultados => {
    // código que usa os resultados de todas as promises
  })
  .catch(erro => {
    // código a ser executado caso ocorra um erro em alguma das promises
  });
//Como criar uma Promise que executa várias tarefas assíncronas em paralelo e retorna o resultado da primeira que terminar?

const promises = [
  /* array com várias promises */
];

Promise.race(promises)
  .then(primeiroResultado => {
    // código que usa o resultado da primeira promise que terminar
  })
  .catch(erro => {
    // código a ser executado caso ocorra um erro em alguma das promises
  });