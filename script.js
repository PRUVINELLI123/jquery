// inicia o jQuery com a leitura do documento
$(document).ready(function() {

    // funcao que alerta na tela a funcionalidade
    alert('Olá querido aluno!');
    // funcao de mensagem no console do navegador
    console.log("Fala Galerinha");

    // jQuery adicionando o conteudo dentro do html
    $('#mensagem').html('Adicionando conteúdo escrito com javascript!');

    // evento clic no botao
    $('.btn-success').click(function(){
        alert("alerta de mensagem após o clic");
    });

    $('.btn-danger').click(function(){
        var idade = prompt("Digite sua idade");
        alert('Sua idade é '+idade);
    });

});