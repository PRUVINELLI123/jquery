// inicia o jQuery com a leitura do documento
$(document).ready(function() {

    // jQuery adicionando o conteudo dentro do html
    $('#mensagem').html('Adicionando conteúdo escrito com javascript!');

    // evento clic no botao
    $('.btn-info').click(function(){
        alert("Curriculo e entrevista de emprego");
    });
    $('.btn-warning').click(function(){
        alert("Criando empresas.");
    });
    $('.btn-success').click(function(){
        alert("Biologia= Áreas de Preservação Química= Distribuição eletrônica Física= MRU E MRUV");
    });
    $('.btn-warning').click(function(){
        alert("Aprendemos sobre HTML, CSS E JAVASCRIPT, boostrap, jquery.");
    });
    $('.btn-danger').click(function(){
        alert("Cada dupla cria sua própria aula e apresentam 1 dupla por período.");
    });
    $('.btn-info').click(function(){
        alert("Variação linguítica.");
    });
    $('.btn-primary').click(function(){
        alert("Função exponencial, geogebra e execel.");
    });


});