/* Elabore duas funções que recebem três parâmetros,
 capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante
  da aplicação financeira sob o regume de juros simples e a segunda retornará o valor da 
  aplicação de juros compostos */

  let jSimples = (capital, taxa, tempo)=>{
    return capital + ( capital * (taxa/100) * tempo);
  }

  let jComposto = (capital, taxa, tempo)=>{
     return capital * (1+ (taxa/100))**tempo;
  }

  console.log(jSimples(620,1.5,24))
  console.log(jComposto(620,1.5,24))