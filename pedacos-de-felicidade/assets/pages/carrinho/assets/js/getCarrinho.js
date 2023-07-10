let infomacao 
const obterDados = ()=>{
    let c_nome = document.querySelector('.titulo-bolo');
    let c_preco = document.querySelector('.preco-bolo');
    let c_quantidade = document.querySelector('.cart-item-qtd');

const init = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }}
    const url =  ('http://localhost:3000/car')
    fetch(url).then(res=>res.json())
    
    .then(dados=>{
    console.log(dados)
    let informacao = dados
    console.log(informacao)
        c_nome.innerHTML = dados.nome
        c_preco.innerHTML = dados.preco
        c_quantidade.value = dados.quantidade
    })

}
obterDados();