const Carrinho = require('../models/carrinho.js')
module.exports =  {
        async index(req, res){
            const car = await Carrinho.findAll();
            if(car == '' || car == null){
                return res.status(200).send({message: 'Nenhum dado no carrinho cadastrado'})
            }
            return res.status(200).send({car});
        },
        async store(req, res){
            const {nome, preco, quantidade} = req.body;
            const car = await Carrinho.create({
                nome, preco,quantidade});
                return res.status(200).send({
                status:1,
                message: 'Carrinho com dados cadastrado ', car})
            },
    
            async update(req, res){
                const {nome, preco, quantidade} = req.body;
                const {car_id} = req.params;
                await Carrinho.update({
                nome, preco, quantidade
                }, {  where: {id:car_id} 
            });
            return res.status(200).send({
                status:1,
                message: 'Carrinho atualizado '});
    
            },
    
            async delete(req, res){
                const {car_id} = req.params;
                await Carrinho.destroy({
                    where:{
                        id:car_id
                    }
                });
               
                return res.status(200).send({
                    status:1,
                    message: 'Carrinho deletado'});
            
            }
    
    }
    

    
    
    