const Cadastros  = require('../models/cadastros.js');
const bcrypt = require('bcryptjs');

module.exports =  {

        async login(req, res){
            
        const {email, senha} = req.body;
        const cadastro = await Cadastros.findOne({where:{email}});
                if(!cadastro){
                return res.status(400).send({
                    status:0,
                    message:'E-mail ou senha incorreto'
                });
            
                }
               
            if(!bcrypt.compareSync(senha, cadastro.senha)){
                return res.status(400).send({
                
                status:0,
                message: 'E-mail ou senha incorreto'
            });

            }
    
        },
        
        async index(req, res){
            const cadastro = await Cadastros.findAll();
            if(cadastro == '' || cadastro == null){
               
                return res.status(200).send({message: 'Nenhum usuário cadastrado'})
            }
            return res.status(200).send({cadastro});

        },
        async store(req, res){
            const {nomeCompleto,email, senha, confirmarSenha} = req.body;
        const cadastro = await Cadastros.create({
            nomeCompleto,email, senha, confirmarSenha});
            return res.status(200).send({
            status:1,
            message: 'Usuário cadastrado ', cadastro })

        },
       
        async update(req, res){
            const {nomeCompleto,email, senha, confirmarSenha} = req.body;
            const {cadastro_id} = req.params;
            await Cadastros.update({
                nomeCompleto,email, senha, confirmarSenha
            }, {
                where: {
                    id:cadastro_id
                } 
    
        });
        return res.status(200).send({
            status:1,
            message: 'Usuário atualizado'});

        },

    
            async delete(req, res){
            const {cadastro_id} = req.params;
            await Cadastros.destroy({
                where:{
                    id:cadastro_id
                }
            });
           
            return res.status(200).send({
                status:1,
                message: 'Usuário deletado'});
            }

}




    
    
    