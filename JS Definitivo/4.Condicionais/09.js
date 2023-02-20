/* 9 - Crie uma função que recebe um número como parâmetro e retorna "maior que 50" 
se ele for maior que 50, 
"entre 10 e 50" se ele estiver entre 10 e 50, ou "menor que 10" caso contrário. */

let classNumeros = (numero)=>{
   if(numero > 50){
    return "maior que 50"
   } else if(10 > numero < 50 ){
    return " entre 10 e 50"
   }else{
    return "menor que 10"
   }


}

console.log(classNumeros(1230));
console.log(classNumeros(30));
console.log(classNumeros(1));