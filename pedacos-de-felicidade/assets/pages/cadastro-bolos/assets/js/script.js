const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn img');
const dropDownMenu = document.querySelector('.dropdown-menu');
const toggleCart = document.querySelector('.car');
const dropDownCart = document.querySelector('.cart');
const subirImg = document.querySelector('#arquivo');
let isOpenMenu;
let isOpenCart;

toggleBtn.onclick = function () {

    dropDownMenu.classList.toggle('open');
    dropDownMenu.classList.contains('open');
};

toggleCart.onclick = function () {

    isOpenCart = dropDownCart.classList.toggle('abrir');
    //dropDownCart.classList.contains('abrir');
};

subirImg.addEventListener('change', function () {
    const selecao = document.querySelector('#selecionar-img');
    selecao.textContent = this.files[0].name
})

let addItem = 0;
addItem = Number(addItem);

function addToCart() {

    let nCar = document.querySelector('#nCar');
    addItem += 1;
    nCar.innerHTML = addItem;
}

function removeToCart(qtd) {
    let nCar = document.querySelector('#nCar');
    if (addItem >= 1) {
        addItem -= qtd;
    }

    nCar.innerHTML = addItem;
}

function ready() {

    let btnDelItem = document.getElementsByClassName('btn-delete');
    for (let i = 0; i < btnDelItem.length; i++) {
        let btn = btnDelItem[i];
        btn.addEventListener('click', delItemCart);
    }

    //add função ao botão para somar quantidade

    let btnAddQtd = document.getElementsByClassName('add-qtd');
    for (let i = 0; i < btnAddQtd.length; i++) {
        let btn = btnAddQtd[i];
        btn.addEventListener('click', sumQtd);
    }


    //add função ao botão para subtrair quantidade
    let btnDeductQtd = document.getElementsByClassName('deduct-qtd');
    for (let i = 0; i < btnDeductQtd.length; i++) {
        let btn = btnDeductQtd[i];
        btn.addEventListener('click', deductQtd);
    }

    //Adicionando função aos botões de comprar

    let btnBuy = document.getElementsByClassName('btn-buy');
    for (let i = 0; i < btnBuy.length; i++) {
        let btn = btnBuy[i];
        btn.addEventListener('click', addToCartClicked);
    }
}

function delItemCart(event) {
    let btnClicked = event.target;
    btnClicked.parentElement.remove();

    //atualização do total do carrinho
    updatePriceCart();

    //pegando o input para verificar a quantidade do item que está sendo removido
    let cartItemQtd = btnClicked.parentElement;
    cartItemQtd = cartItemQtd.getElementsByClassName('cart-item-qtd')[0];
    removeToCart(cartItemQtd.value);

}

function updatePriceCart() {
    let cartContainer = document.getElementsByClassName('cart')[0];
    let cartItems = cartContainer.getElementsByClassName('cart-item');
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        let priceElement = item.getElementsByClassName('cart-item-price')[0];
        let price = parseFloat(priceElement.innerText.replace('R$', '').replace('.', ''));
        //console.log(price);

        let qtdItem = item.getElementsByClassName('cart-item-qtd')[0];

        let qtd = qtdItem.value;

        total = total + (price * qtd);
    }

    let totalPriceElement = document.querySelector('.cart-price-total');
    total = total / 100;
    totalPriceElement.innerText = 'R$' + total.toFixed(2);
}

//aumentando em um a quantidade do elemento selecionado

function sumQtd(event) {
    let btnClicked = event.target;
    let selector = btnClicked.parentElement; //pego o pai do botão de somar
    let qtdCurrent = selector.getElementsByClassName('cart-item-qtd')[0].value;

    qtdCurrent = Number(qtdCurrent);
    qtdCurrent++;
    addToCart()

    let cartItemQtd = selector.getElementsByClassName('cart-item-qtd')[0];

    cartItemQtd.value = qtdCurrent;
    //atualizamos o total no carrinho
    updatePriceCart();
}

function deductQtd(event) {
    let btnClicked = event.target;
    let selector = btnClicked.parentElement; //pego o pai do botão de subtrair

    let qtdCurrent = selector.getElementsByClassName('cart-item-qtd')[0].value;

    let cartItemQtd = selector.getElementsByClassName('cart-item-qtd')[0];

    let cartDetails = selector.parentElement;
    let cartItem = cartDetails.parentElement;

    qtdCurrent = Number(qtdCurrent);
    removeToCart(1);
    qtdCurrent--;


    if (qtdCurrent > 0) {
        cartItemQtd.value = qtdCurrent;
        //atualizamos o total no carrinho
        updatePriceCart();
    }
    else {
        cartItem.parentElement.remove();
        updatePriceCart();
    }

}

function addToCartClicked(event) {
    let btn = event.target;
    let item = btn.parentElement;
    let title = item.getElementsByClassName('product-title')[0].innerText;
    let price = item.getElementsByClassName('product-price')[0].innerText;
    let img = item.getElementsByClassName('product-img')[0].src;

    //função para adicionar o item ao carrinho
    const bolo = {
        title: title,
        price: price,
        img: img
    }
    addItemToCart(bolo);
}

function addItemToCart(bolo) {
    let item = document.createElement('div');
    item.classList.add = 'item';
    let itemsCart = document.getElementsByClassName('cart-items')[0];


    //controle dos itens para que não se repitam

    let itemsNameCart = itemsCart.getElementsByClassName('title-item-cart');
    for (let i = 0; i < itemsNameCart.length; i++) {
        itemName = itemsNameCart[i];
        if (bolo.title == itemName.innerText) {
            alert('O bolo já se encontra no carrinho!');
            return;
        }
    }
    addToCart();


    let itemCartContainer = `
    <div class="cart-item">
        <img class="item-i" src="${bolo.img}" alt="bolo-de-morango">
        <div class="cart-details">
            <span class="title-item-cart">${bolo.title}</span>
            <div class="selector-qtd">
                <i class="fa-solid fa-minus deduct-qtd"></i>
                <input type="text" value="1" class="cart-item-qtd">
                <i class="fa-solid fa-plus add-qtd"></i>
                <span class="cart-item-price">${bolo.price}</span>
            </div>
        </div>
        <span class="btn-delete">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `

    item.innerHTML = itemCartContainer;
    itemsCart.append(item);

    item.getElementsByClassName('btn-delete')[0].addEventListener('click', delItemCart);
    item.getElementsByClassName('add-qtd')[0].addEventListener('click', sumQtd);
    item.getElementsByClassName('deduct-qtd')[0].addEventListener('click', deductQtd);
    updatePriceCart();
}

ready();

//pegando dados do front para enviar ao back
let form = document.querySelector('.form-cadastro');

function eventForm(event) {
    event.preventDefault();
}

function click() {
    form.addEventListener('submit', eventForm);

    let btnRegister = document.querySelector('.btn-register-cake');
    btnRegister.addEventListener('click', createCake);
}

async function fazPost(bolo) {

    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bolo)
    }

    //chamando post
    const url = 'http://localhost:3000/produtos';
    fetch(url, init)
        .then((response) => {
            return response.json(); //obtenho a resposta do post convertida em json
        })
        .then((bolo) => {
            console.log(bolo); //só para mostrar que o bolo chegou no post
        })
        .catch ((error) =>{
            console.log("Erro, produto não cadastrado", error); //caso dê erros, entra nesse catch
        })   
}

function createCake() {

    let nome = document.querySelector("#nome").value;
    let descricao = document.querySelector("#descricao").value;
    let preco = document.querySelector("#preco").value;
    let img = document.querySelector("#arquivo").files[0];
    let msg = '';

    const bolo = {
        nome: nome,
        preco: Number(preco),
        descricao: descricao
        //img: img
    };
    
    //dados.append('bolo', JSON.stringify(bolo));
    //dados.append('imagem', img);

    if((nome.length != 0) && (preco.length != 0) && (descricao.length != 0))
    {
        fazPost(bolo);
    }
    if(nome.length == 0)
    {
        msg += `Informe o nome!`;
    }
    if(preco.length == 0)
    {
        msg += `\nInforme o preço!` ;
    }
    if(descricao.length == 0)
    {
        msg += '\nInforme a descrição!';
    }
    if(msg){
        alert(msg);
    }
}



click();