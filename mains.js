document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 100;

    // Mostrar/ocultar menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        opcoesDeAcessibilidade.classList.toggle('ativo');
    });

    // Aumentar fonte
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    });

    // Diminuir fonte
    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte = Math.max(50, tamanhoAtualFonte - 10);
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    });

    // Contraste
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    // Animações de entrada
    ScrollReveal().reveal('#informacao', { delay: 500 });
    ScrollReveal().reveal('#informacao2', { delay: 500 });
    ScrollReveal().reveal('#rodape', { delay: 500 });
});
ScrollReveal().reveal('#informacao3', { delay: 500 });

