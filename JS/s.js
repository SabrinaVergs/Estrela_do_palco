// Troca a imagem do elemento <img> pelo id, para o caminho da imagem escolhido
function escolher(idElemento, caminhoImagem) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.src = caminhoImagem;
    }
}

// Troca a imagem de fundo da página (body)
function escolherCenario(caminhoCenario) {
    document.body.style.backgroundImage = `url('${caminhoCenario}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}

// Reinicia o jogo, levando para a página inicial
function reiniciar() {
    window.location.href = 'index.html';
}
