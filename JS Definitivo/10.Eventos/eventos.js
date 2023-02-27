
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


//<li>Crie um evento de desfoque em um input..</li>

//<li>Crie um evento de mouse sobre um elemento.</li>

//<li>Crie um evento de mouse fora de um elemento..</li>

//<li>Crie um evento de arrastar e soltar em um elemento.</li>

//<li>Crie um evento de rolagem em uma página.</li>

//<li>Crie um evento de redimensionamento de janela.</li>

//<li>Remova um evento de um elemento.</li>

//<li>Crie um evento de tempo em um intervalo de tempo especificado.</li>

//<li>Crie um evento personalizado em um elemento.</li>

//<li>Adicione um ouvinte de evento a um elemento.</li>

//<li>Remova um ouvinte de evento de um elemento.</li>

//<li>Pare a propagação de um evento.</li>

//<li>Prevenir o comportamento padrão de um evento.</li>

//<li>Acesse o alvo de um evento.</li>

//<li>Acesse as propriedades de um evento. </li>

//<li>Dispare um evento manualmente.</li>*/









