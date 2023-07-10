//função pra limpar os inputs
function limpar() {
    document.querySelector('#nome').value = '';
    document.querySelector('#descricao').value = '';
    document.querySelector('#preco').value = '';
    document.querySelector('#selecionar-img').innerHTML = 'Selecionar imagem';

}

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

function fazPost(bolo) {

    const init = {
        method: 'POST',
        body: bolo
    }

    //chamando post
    const url = 'http://localhost:3000/produtos';
    fetch(url, init)
        .then((response) => {
            return response.json(); //obtenho a resposta do post convertida em json
        })
        .then((response) => {
            response = response.produto;
            console.log(response);
            alert(`Produto: ${response.nome} foi cadastrado com sucesso!`) //só para mostrar que o bolo chegou no post e agora foi restornado de lá como response =)
        })
        .catch((error) => {
            console.log("Erro, produto não cadastrado", error); //caso dê erros, entra nesse catch
        })

}

function createCake() {

    let nome = document.querySelector("#nome").value;
    let descricao = document.querySelector("#descricao").value;
    let preco = document.querySelector("#preco").value;
    let img = document.querySelector("#arquivo").files[0];
    let msg = '';

    let bolo = {
        nome: nome,
        preco: Number(preco),
        descricao: descricao,
        imagem: img
    };

    formData = new FormData();

    formData.append("nome", nome);
    formData.append("preco", preco);
    formData.append("descricao", descricao);
    formData.append("foto", img);

    
    if ((nome.length != 0) && (preco.length != 0) && (descricao.length != 0)) {
        fazPost(formData);
        //limpar();
    }
    if (nome.length == 0) {
        msg += `Informe o nome!`;
    }
    if (preco.length == 0) {
        msg += `\nInforme o preço!`;
    }
    if (descricao.length == 0) {
        msg += '\nInforme a descrição!';
    }
    if (msg) {
        alert(msg);
    }
}



click();