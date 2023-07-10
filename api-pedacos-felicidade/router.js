const Express = require("express");
const ProdutosController = require("./controllers/produtoController.js");
const CarrinhoController = require('./controllers/carrinhoController.js');
const CadastrosController = require('./controllers/cadastroController.js');
const UsuariosController = require('./controllers/usuarioController.js')
const upload = require('./config/configMulter.js');
const router = Express()

//Produtos
router.get('/produtos',ProdutosController.index);
router.post('/produtos',upload.single('foto'),ProdutosController.store );
router.put('/produtos/:produto_id',ProdutosController.update );
router.delete('/produtos/:produto_id',ProdutosController.delete);

//Carrinho
router.get('/car',CarrinhoController.index );
router.post('/car',CarrinhoController.store );
router.put('/car/:car_id',CarrinhoController.update );
router.delete('/car/:car_id',CarrinhoController.delete);
/*
//usuario
router.post('/usuarios/login',UsuariosController.login);
router.get('/usuarios/login',UsuariosController.index);
*/

//cadastros
router.get('/cadastros',CadastrosController.index );
router.post('/cadastros',CadastrosController.store );
router.put('/cadastros/:cadastro_id',CadastrosController.update );
router.delete('/cadastros/:cadastro_id',CadastrosController.delete);

module.exports = router;