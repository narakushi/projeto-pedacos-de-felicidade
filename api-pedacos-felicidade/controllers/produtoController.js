const Produtos = require('../models/produtos.js')
const upload = require('../config/configMulter.js')
module.exports =  {

        async index(req, res){
            const produto = await Produtos.findAll();
            if(produto == '' || produto == null){
                return res.status(200).send({message: 'Nenhum produto cadastrado'})
            }
            return res.status(200).send({produto});
        },
            async store(req, res) {
                upload.single('imagem');

                  const { nome, preco, descricao } = req.body;
                  const { filename } = req.file
            
                  const produto = await Produtos.create({
                    nome,
                    preco,
                    descricao,
                    imagem: filename
                  });
                return res.status(200).send({
                status:1,
                message: 'Produto cadastrado ', produto})
            },
    
            async update(req, res){
                const {nome, preco, descricao} = req.body;
                const {produto_id} = req.params;
                await Produtos.update({
                nome, preco, descricao
                }, {  where: {id:produto_id} 
            });
            return res.status(200).send({
                status:1,
                message: 'Produto atualizado '});
    
            },
    
            async delete(req, res){
                const {produto_id} = req.params;
                await Produtos.destroy({
                    where:{
                        id:produto_id
                    }
                });
               
                return res.status(200).send({
                    status:1,
                    message: 'Produto deletado'});
            
            }
    
    }
    
 
    
    
    