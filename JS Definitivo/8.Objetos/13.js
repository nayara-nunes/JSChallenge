//13. Verifique se dois objetos são iguais.

/* Para verificar se dois objetos são iguais em JS 
pode se usar o método `JSON.stringify()` para 
comparar suas representações em string */

/*Esse método converte um objeto JavaScript em uma 
string JSON, que pode ser comparada
 com a representação em string de outro objeto. */

 const objeto1 ={
  prop1: 'valor1',
  prop2:'valor2',
  prop3: 'valor3',

 }
 const objeto2 ={
  prop1: 'valor1',
  prop2: 'valor2',
  prop3:'valor3',

 }

 if(JSON.stringify(objeto1) === JSON.stringify(objeto2)){
  console.log("Os objetos são iguais!");

 }else{
  console.log("os objetos são diferentes!")
 }