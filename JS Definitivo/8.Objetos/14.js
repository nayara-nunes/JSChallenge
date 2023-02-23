//14. Crie um objeto a partir de uma string JSON.
// JSON.parse() => Analisa uma string JSON e retorna um objeto JS equivalente.

const jsonString = '{"nome": "João", "idade": 30, "profissao": "Engenheiro de Software"}';

const objeto = JSON.parse(jsonString);

console.log(objeto); // { nome: 'João', idade: 30, profissao: 'Engenheiro' }
