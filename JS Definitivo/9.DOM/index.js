//<li> Selecione um elemento pelo seu id.</li>
let element = document.querySelector('#rota');

//<li>Selecione um elemento pela sua classe.</li>
let header = document.getElementsByClassName('header')
//<li>Selecione todos os elementos de uma tag específica.</li> 
let tag = document.getElementsByTagName("p")

//<li>Altere o texto de um elemento.</li>

/* Pode-se usar a propriedade 'textContent' ou innerHTML. A diferença entre elas é que text Content trata o valor
como texto simples, enquanto innerHTML interpreta o valor como HTML  */
let mudarTexto = document.getElementById('follow').textContent = "Siga-nos"

//<li>Altere o HTML de um elemento.</li>
let deixarMarcado = document.getElementById('strong');
deixarMarcado.innerHTML = "<strong>Privacy & Security</strong> | Termos and Conditions"

//<li>Adicione um novo elemento à página.</li>
let anotacoes = document.createElement("p");
anotacoes.textContent = "Este código cria um novo elemento p com o texto "
let divExemplo = document.querySelector("#exemplo");
divExemplo.appendChild(anotacoes);
//<li>Remova uma classe de um elemento.</li>
let elementClasse = document.getElementById("h4");
elementClasse.classList.remove("ativo");
//<li>Adicione um evento a um elemento.</li>
var botao = document.getElementById("botao");
botao.addEventListener("click", function() {
  // código a ser executado quando o botão for clicado
});

//<li>Remova um evento de um elemento.</li>
//<li>Selecione o elemento pai de um elemento.</li>
//<li>Selecione um elemento irmão de um elemento.</li>
//<li>Selecione todos os elementos filhos de um elemento.</li>
//<li>Selecione todos os elementos descendentes de um elemento.</li>
//<li>Selecione o valor de um input.</li>
//<li>Altere o valor de um input.</li>
//<li>Selecione o atributo de um elemento.</li>
//<li>Altere o valor de um atributo de um elemento. </li>
