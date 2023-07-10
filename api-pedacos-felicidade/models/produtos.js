const Sequelize = require('sequelize')
const database = require('../database/index.js')


const Produtos = database.define('produto', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    }, 
    nome:{
    type: Sequelize.STRING,
    allowNull: false
    }, 
    preco: {
    type: Sequelize.DECIMAL,
    },
    descricao: Sequelize.STRING,
    imagem: {
        type: Sequelize.BLOB,
        allowNull: false
      },  
    })
    
    
    module.exports =  Produtos;


 