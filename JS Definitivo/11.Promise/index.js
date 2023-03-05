//O que é uma Promise?

 /*São usadas em operações assíncronas em JS, como solicitações de rede, leitura e 
 gravação de arquivos, animações e outras tarefas que podem levar tempo para serem concluídas*/

 //Como criar uma nova Promise?

 const minhaPromise = new Promise((resolve, reject) =>{
  // lógica da promise
   resolve();

   reject();

 });

 minhaPromise.then(error =>{
 }).catch(erro =>{
  console.log(" Erro numero tal")

 });

 //Como usar o método .then() para lidar com o resultado de uma Promise?
 const minhaPromessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(' Após 1 s isso aparece');
  }, 1000);
});

//Como usar o método .catch() para lidar com erros em uma Promise?
minhaPromessa.catch((erro) => {
  console.error(erro);
});

//<li>Como converter uma função que utiliza callbacks para utilizar Promises?</li>
function funcaoComCallback(parametro, callback) {
  // Executa uma operação assíncrona que chama o callback com o resultado
  // ou com um erro, se houver.
}

function funcaoComPromise(parametro) {
  return new Promise((resolve, reject) => {
    funcaoComCallback(parametro, (resultado, erro) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(resultado);
      }
    });
  });
}
