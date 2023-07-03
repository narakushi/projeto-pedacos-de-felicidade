const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const database = require('../database/index.js') 

const Cadastro = database.define('cadastros',{
            id: {
                type:Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
                
            },
            nomeCompleto: {
              type: Sequelize.STRING,
              allowNull: false
           },
           email: {
               type: Sequelize.STRING,
               allowNull: false
         
           },
           senha: {
               type: Sequelize.STRING,
               allowNull: false
           },
           confirmarSenha: {
               type: Sequelize.STRING,
               allowNull: false
        }
        
    
            
            
       
})

module.exports = Cadastro;
