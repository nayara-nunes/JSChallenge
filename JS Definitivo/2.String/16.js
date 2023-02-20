/*Crie uma função que recebe uma string como parâmetro e retorna 
a string sem os caracteres especiais (!, @, #, $, %, ^, &, *, (, ), -, _, +,
 =, {, }, [, ], |, , :, ;, ", ', <, >, ,, ., /, ?, ` e ~).
*/

let removeCaracteresEspeciais = () =>{
  let caracteres = /[!@#$%^&*()\[\]{}|\:;"'<,.>?\/`~=_+-]/g;
  return string.replace(caracteres, '')
}




