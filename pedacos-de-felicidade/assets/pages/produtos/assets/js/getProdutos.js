init = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

function geraProduto(produtos) {
    let containerProduto = document.createElement('div');
    containerProduto.classList.add = 'containerProduto';
    let productsPagina = document.querySelector('.products');
    let produto = produtos.produto; //simplifico o array pois é um array de um arraykkk
    let marginTopFooter = document.querySelector('.footer');
    console.log(produto[0].imagem);

    // Tratamento de imagem
    /*const uint8Array = new Uint8Array(produto[0].imagem.data);
    const blob = new Blob([uint8Array], { type: produto[0].imagem.type });
    const url = URL.createObjectURL(blob);
    const imgElement = document.createElement('img');
    imgElement.src = url;

    containerProduto.appendChild(imgElement);
    productsPagina.appendChild(containerProduto);

    console.log(produto[0].imagem.type)*/

    for(let i =0; i < produto.length; i++)
    {
        produto[i].imagem = document.createElement('img');
        console.log(produto[i].imagem);
        for(let i = 0; i < produto.length; i++){
            produto[i].imagem.src = `./assets/imgs/bolo/bolo0${i+1}.png`
        }
    }

    for (let i = 0; i < produto.length; i++) {
        let boloContainer = `<div class="cake">
        <img class="product-img" src="${produto[i].imagem.src}" alt="bolo-chocolate">
        <p class="product-title">${produto[i].nome}</p>
        <p style="text-align: center; font-size: 1.3rem;">${produto[i].descricao}</p>
        <p class="product-price">R$${Number(produto[i].preco).toFixed(2)}</p>
        <button class="btn-buy">Comprar</button>
    </div>`;
        productsPagina.innerHTML += boloContainer;
    }
}

async function mostrarProdutos() {
    let produtos; //variável para guardar os dados vindos do get
    const url = "http://localhost:3000/produtos";

    try {
        const response = await fetch(url, init); //faço a requisição com o fetch e uso o await para que a proxima linha só seja executada quando a requisição obtiver a resposta
        let dado = await response.json(); //finalizada a requisição, pego o json que a api envia
        console.log(dado); //mostro na tela
        produtos = { ...dado }; //passo para que produtos armazene
    }
    catch (erro) {
        console.log(erro);
    }

    //console.log(produtos); //mostro que os dados foram para produtos tbm

    geraProduto(produtos);
}

mostrarProdutos();



