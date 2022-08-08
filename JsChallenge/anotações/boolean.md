# Boolean e condicionais 

Existem dois valores booleanos false ou true; 

Truthy e falsy 
- Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana. 


 ```js
  // falsy
   if(false)
   if(0) // ou -0
   if(NaN)
   if(null)
   if(undefined)
   if('') // ou "" ou ``

   // Truthy
  if(true)
  if(1)
  if(' ')
  if('andre')
  if(-5)
  if({})
 
 ```
 ### Operador Lógico de negação !
  Nega uma operação booleana. Ou seja !true = false;
 ```js
   // Truthy
   if(!true) // false
   if(!1) // false
   if(!'') // true
   if(!undefined) // true
   if(!!' ') // true
   if(!!'') // false
```


## Operador de comparação
Vão sempre retornar um valor booleano 

 ```js
  10 > 5; // true
  5 > 10; // false
  20 < 10; // false
  10 <= 10 // true
  10 >= 11 // false
```

## Operadores de comparação 
O == faz uma comparação não tão estrita e o === faz uma
comparação estrita, ou seja, o tipo de dado deve ser o mesmo
quando usamos ===

 ```js
  10 == '10'; // true
   10 == 10; // true
   10 === '10'; // false
   10 === 10 // true
  10 != 15 // true
  10 != '10' // false
  10 !== '10' // true
```

- Operadores Lógicos && Compara se uma expressão e a outra é verdadeira. 
- Operador Lógico || -> Compara se uma expressão ou outra é verdadeira. Obs: Retorna o primeiro valor true que encontrar. 