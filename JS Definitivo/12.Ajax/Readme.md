# Ajax 
<br><hr>
-> técnica de desenvolvimento web que permite atualizar partes específicas de uma página web, sem ter que recarregar toda a página. Possível através do uso de JS para enviar e receber dados em segundo plano, enquanto o usuário interage com a página. 

## Estrutura

A estrutura do Ajax é composta por quatro elementos principais:

<ol>
  <li><strong>Evento de acionamento: </strong>Isso pode ser qualquer ação do usuário, como clicar em um botão ou digitar texto em um campo de entrada.</li>
  
  <li><strong>Objeto XMLHttpRequest (XHR):</strong> É uma API do navegador que permite fazer solicitações HTTP assíncronas para um servidor web. É o objeto XHR que permite enviar e receber dados em segundo plano, sem precisar recarregar a página.</li>
  
  <li><strong>Servidor web:</strong> É o local onde o script do servidor processa a solicitação e retorna os dados para o cliente. O servidor pode retornar dados em qualquer formato, como XML, JSON, HTML ou texto simples.</li>
  
  <li><strong>Manipulação do DOM:</strong> Depois que os dados são recebidos do servidor, eles são manipulados usando JavaScript para atualizar a página sem recarregá-la completamente. Isso geralmente envolve a atualização de uma seção específica da página com os novos dados recebidos do servidor.</li>
</ol>
<code>
// Cria um novo objeto XHR
var xhttp = new XMLHttpRequest();

// Configura a requisição
xhttp.open("GET", "https://exemplo.com/api/dados", true);

// Envia a requisição
xhttp.send();

// Trata a resposta
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var resposta = JSON.parse(this.responseText);
    console.log(resposta);
  }
};
</code>