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

 });

 //