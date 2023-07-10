
function geraProduto(produtos) {
    let containerProduto = document.createElement('div');
    containerProduto.classList.add = 'containerProduto';
    let productsPagina = document.querySelector('.products');
    let produto = produtos.produto; //simplifico o array pois é um array de um arraykkk
    let marginTopFooter = document.querySelector('.footer');

    for (let i = 0; i < produto.length; i++) {
        produto[i].imagem = document.createElement('img');
        for (let i = 0; i < produto.length; i++) {
            produto[i].imagem.src = `./assets/imgs/bolo/bolo0${i + 1}.png`
        }
    }

    for (let i = 0; i < produto.length; i++) {
        let boloContainer = `<div class="cake">
        <img class="product-img" src="${produto[i].imagem.src}" alt="bolo-chocolate">
        <p class="product-title">${produto[i].nome}</p>
        <p style="text-align: center; font-size: 1.3rem;">${produto[i].descricao}</p>
        <p class="product-price">${produto[i].preco}</p>
        <div class="btns">
            <!--button class="btn-buy">Comprar</button-->
            <button class="btn-update">Atualizar</button>
            <button class="botao-deletar" onclick="deletarProduto()">Deletar</button>
        </div>
    </div>`;
        productsPagina.innerHTML += boloContainer;
    }
    
}

async function mostrarProdutos() {
    init = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let produtos; //variável para guardar os dados vindos do get
    const url = "http://localhost:3000/produtos";

    try {
        const response = await fetch(url, init); //faço a requisição com o fetch e uso o await para que a proxima linha só seja executada quando a requisição obtiver a resposta
        let dado = await response.json(); //finalizada a requisição, pego o json que a api envia
        //console.log(dado); //mostro na tela
        produtos = { ...dado }; //passo para que produtos armazene
    }
    catch (erro) {
        console.log(erro);
    }

    //console.log(produtos); //mostro que os dados foram para produtos tbm

    geraProduto(produtos);
}

mostrarProdutos();

function pegaProduto(produtos){
    return produtos;
}

//para deletar o bolo

function checkElementsAvailability() {
    let btnDel = document.getElementsByClassName('botao-deletar');
    if (btnDel.length > 0) {
        for (let i = 0; i < btnDel.length; i++) {
            let btn = btnDel[i];
            btn.addEventListener('click', deletarProduto);
        }
    } else {
        // Os elementos ainda não estão disponíveis, aguardar e verificar novamente
        setTimeout(checkElementsAvailability, 100); // Atraso de 100 milissegundos
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Atrasar a verificação da disponibilidade dos elementos DOM
    setTimeout(checkElementsAvailability, 100); // Atraso de 100 milissegundos
});

function deletarProduto(evento) {
    botaoClicado = evento.target;
    botaoClicado = botaoClicado.parentElement;
    botaoClicado.parentElement.remove()
}

















