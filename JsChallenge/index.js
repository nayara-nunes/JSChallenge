// Metódos Strings

console.log('Metódos Strings');
console.log('Extrair partes de String');

let string = 'Banana, maçã, kiwi, pêssego'

console.log(" usando o método Slice : "+ string.slice(-3));

console.log(" usando o método Substring : "+ string.substring(-3));
console.log(" usando o método Substr: "+ string.substr(-3));

let calc = function(a,b,c,d,e,f){
     let result = ((((a+b) - c )*d)/e) **f;
     return result;
}

console.log(calc(10,2,2,3,5,4))

let contador = function(a, b){
  let cont = 0;
  a.split("");
  for(b of a){
       if(b == a){
    cont++;
    }
  }

  return cont;
}

console.log(contador('banana', 'a'))

// Escreva uma função que recebe um número como argumento. Se a for um número inteiro retorna true,
// Caso contrário retorna falso. 

let isInter =(number)=>{
   return Number.isInteger(number) 
}

console.log(isInter(12.3));

// Escreva uma função que receba dois números (a, b) como argumento. Retorna b por cento de a. 
let percent = (a, b) =>{

  return a * (b/100);
}

console.log(percent(15, 3))

//Escreva uma função que recebe um numero como argumento. 
//Arredonda a para o 2° digito após a vírgula. Retorna o número arredondado. 

let arredond = (a) =>{
  return a.toFixed(2)
}

console.log(arredond(26.1379));

// Escreva uma função que receba uma string como argumento.Remove os 3 últimos caracteres de um, retorna
// o resultado
let remove = (string)=> {
return string.slice(0, -3);
}
console.log(remove('abcdef'));

/*Escreva uma função que receba um numero . Divide seus digitos e os retorna em um array.

let transformArray = (number) => {
 number = number.toString().split(''); 
  number.forEach()
  return number;
}
console.log(transformArray(193278));

*/
//Escreva uma função que receva dois numeros, verifica se x é divisivel por y. Se sim retorna X. 
// Se não retorna o p´roximo natural mais alto que é divisivel por y. 

let divisivel = (x, y) =>{
  const q = ~~(x/y);
  if(x%y === 0){
     return x;
  }else {
    let resto = (x*y) > 0 ?
    (y * (q + 1)) : (y*(q-1));
    return resto;
  }
 
}

console.log(divisivel(12, 4));

/*Escreve uma função que recebe duas strings (a e b) como argumentos
 Começando no final de 'a', insira 'b' após cada 3º caractere de 'a'
 Retorna a string resultante.*/
