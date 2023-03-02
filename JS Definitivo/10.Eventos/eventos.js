
/*<li>Crie um evento de clique em um botão.</li>*/
let click = document.querySelector('.button');
click.addEventListener('click',function(){
   console.log("Evento de click único")
})
//<li>Crie um evento de duplo clique em um botão.</li>
 let masc = document.querySelector('#dblclick');
 masc.addEventListener('dblclick', function(){
  console.log("Evento de duplo click");
 });

//<li>Crie um evento de teclado em um input.</li> 

const meuInput = document.querySelector("#meuInput");

meuInput.addEventListener("keydown", function(event) {
  console.log(`A tecla "${event.key}" foi pressionada.`);
});

meuInput.addEventListener("keyup", function(event) {
  console.log(`A tecla "${event.key}" foi solta.`);
});

meuInput.addEventListener("keypress", function(event) {
  console.log(`A tecla "${event.key}" foi pressionada.`);
});


//<li>Crie um evento de mudança em um input.</li>

meuInput.addEventListener("change", function(event) {
  console.log(`O valor do input mudou para "${event.target.value}".`);
});

/*event.target.value é uma propriedade que contém o valor atual do elemento que disparou o evento.
 Ela é frequentemente usada em eventos de formulários
 para obter o valor de um input, textarea ou select quando o usuário interage com o elemento. */


//<li>Crie um evento de foco em um input.</li>


const btn = document.querySelector('#btn');
const target = document.querySelector('.target');

btn.addEventListener('focus',function() {
  target.style.backgroundColor = 'red';
});

//<li>Crie um evento de desfoque em um input..</li>
btn.addEventListener('blur',function() {
  target.style.backgroundColor = 'green';
});
//<li>Crie um evento de mouse sobre um elemento.</li>
const box = document.querySelector('.icons-decor');
box.addEventListener('mouseout',function(){
  console.log("Retirou o mouse")
})

//<li>Crie um evento de mouse fora de um elemento..</li>

box.addEventListener('mouseover',function(){
  console.log("passou o mouse")
})

//<li>Crie um evento de arrastar e soltar em um elemento.</li>

const drag = document.querySelector('.drag');
const drop = document.querySelector('.drop');




//<li>Crie um evento de rolagem em uma página.</li>
window.addEventListener('scroll', function() {
  var conteudo = document.querySelector('.conteudo');
  var posicao = conteudo.getBoundingClientRect().top;
  var alturaTela = window.innerHeight;

  if (posicao < alturaTela) {
    // Aparecer algum elemento ou executar alguma ação
    console.log('O conteúdo está aparecendo na tela!');
  }
});


//<li>Crie um evento de redimensionamento de janela.</li>
window.addEventListener('resize', function() {
  console.log('A janela foi redimensionada!');
});


//<li>Remova um evento de um elemento.</li>
const botao = document.querySelector('#button');

function handleClick() {
  console.log('O botão foi clicado!');
}

botao.addEventListener('click', handleClick);

// Depois de um tempo, remova o evento
//


//<li>Crie um evento de tempo em um intervalo de tempo especificado.</li>
const timer = setInterval(function() {
  botao.removeEventListener('click', handleClick);
}, 5000);

// Depois de um tempo, pare o evento
clearInterval(timer);


//<li>Crie um evento personalizado em um elemento.</li>
// Crie um novo evento personalizado
const meuEvento = new CustomEvent('meuEvento', {
  bubbles: true,
  cancelable: true
});

// Despache o evento personalizado no elemento
elemento.dispatchEvent(meuEvento);

//<li>Adicione um ouvinte de evento a um elemento.</li>
const meuBotao = document.querySelector('#meuBotao');

meuBotao.addEventListener('click', function() {
  console.log('O botão foi clicado!');
});


//<li>Remova um ouvinte de evento de um elemento.</li>

//<li>Pare a propagação de um evento.</li>
event.stopPropagation();
//<li>Prevenir o comportamento padrão de um evento.</li>
const meuLink = document.querySelector('#meuLink');

meuLink.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('O link não vai abrir a página do Google!');
});

//<li>Acesse o alvo de um evento.</li>


meuBotao.addEventListener('click', function(event) {
  console.log('O botão foi clicado!');
  console.log('O alvo do evento é:', event.target);
});

//<li>Acesse as propriedades de um evento. </li>


meuBotao.addEventListener('click', function(event) {
  console.log('O tipo do evento é:', event.type);
  console.log('O alvo do evento é:', event.target);
  console.log('O carimbo de data/hora do evento é:', event.timeStamp);
});


//<li>Dispare um evento manualmente.</li>*/


meuBotao.addEventListener('click', function(event) {
  console.log('O botão foi clicado!');
});

const eventoDeClique = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true
});

meuBotao.dispatchEvent(eventoDeClique);










