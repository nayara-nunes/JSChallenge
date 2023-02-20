/*Crie uma função que recebe dois números como parâmetros e retorna o maior deles.*/
let numMaior = (num1, num2)=>{
//num1 === num2 ? true : false;

if(num1 == num2){
  return "numeros iguais";

} else if(num1 > num2){
  return num1;

}else {
  return num2;
}
}

