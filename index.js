function irPara(objetoNome) {
    var principal = document.getElementById("principal");
    var objetoObj = document.getElementById(objetoNome);
    principal.scrollTo({ top: objetoObj.offsetTop, behavior: 'smooth' });
}

function moverQuadrado(quadrado) {
    var quadrado0 = document.querySelector(".quadrado--0");

    var atual = quadrado.className;
    var vazio = quadrado0.className;

    quadrado0.className = atual;
    quadrado.className = vazio;
}

function navegarPara(link) {
    window.open(link, '_blank');
}