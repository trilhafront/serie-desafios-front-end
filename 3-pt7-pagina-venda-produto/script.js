
let posicaoItem = 0
let deslocamentoImagens = 0

let $irDireita = document.querySelector(".ir-direita")
$irDireita.addEventListener("click", function() {
    console.log("direita")
    if (posicaoItem < 3) {
        console.log(posicaoItem)   
        posicaoItem++;
        deslocamentoImagens = posicaoItem * 375
        let $imagens = document.querySelector("#imagens")
        $imagens.style.transform = `translate(-${deslocamentoImagens}px)`  
    }
})

document.querySelector(".ir-esquerda").addEventListener("click", function() {
    console.log("esquerda")
    if (posicaoItem > 0) {
        console.log(posicaoItem)   
        posicaoItem--;
        deslocamentoImagens = deslocamentoImagens - 375
        let $imagens = document.querySelector("#imagens")
        $imagens.style.transform = `translate(-${deslocamentoImagens}px)`  
    }
})

let $iconeAbrirMenu = document.querySelector("#icone-abrir-menu")
$iconeAbrirMenu.addEventListener("click", function() {
    console.log("abrir menu")
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})

let $iconeFecharMenu = document.querySelector("#icone-fechar-menu")
$iconeFecharMenu.addEventListener("click", function() {
    let $fundoCinza = document.querySelector("#fundo-cinza")
    let $menuNavegacao = document.querySelector("#menu-navegacao")
    $fundoCinza.classList.toggle("active")
    $menuNavegacao.classList.toggle("active")
})

document.querySelector("#quantidade-mais").addEventListener("click", function() {
    console.log("mais")
    let $quantidade = document.querySelector("#quantidade")
    $quantidade.textContent = Number($quantidade.textContent) + 1
})

document.querySelector("#quantidade-menos").addEventListener("click", function() {
    console.log("menos")
    let $quantidade = document.querySelector("#quantidade")
    let quantidadeNumber = Number($quantidade.textContent)
    if ( quantidadeNumber > 0) {
        $quantidade.textContent = quantidadeNumber - 1
    }
})

document.querySelector("#icone-carrinho").addEventListener("click", function() {
    document.querySelector("#carrinho").classList.toggle("aberto")
})