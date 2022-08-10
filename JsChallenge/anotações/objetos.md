## Objetos 

Criar um objeto é simples: 
  - Define-se uma variável
  - inicia o seu valor com chaves.

Constructor Function 

 São responsaveis por construir novos objetos sempre que chamarmos a mesma.

 ```js 
 function Carro(marca, preco){
  this.marca = marca;
  this.preco =preco;
   }

   const honda = new Carro('Honda', 4000);

   

 ```