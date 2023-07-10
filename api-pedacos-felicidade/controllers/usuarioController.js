const  Usuarios = require('../models/usuarios.js'); 
const bcrypt = require('bcryptjs') ;

 module.exports = {
        
            async login(req, res) {
                const { senha, email, online } = req.body;
        
                const user = await Usuarios.findOne({ where: { email } });
        
                if (!user) {
                    return res.status(400).send({
                        status: 0,
                        message: 'E-mail ou senha incorreto!',
                        user: {}
                    });
                }
        
                if (!bcrypt.compareSync(senha, user.senha)) {
                    return res.status(400).send({
                        status: 0,
                        message: 'E-mail ou senha incorreto!',
                        user: {}
                    });
                }
        
                const user_id = user.id;
        
                await Usuarios.update({
                    online
                }, {
                    where: {
                        id: user_id
                    }
                });
        }
    }