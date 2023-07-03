const {Sequelize } = require("sequelize");
const database = require('../database/index.js') 


const Carrinho = database.define('carrinho',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      
        },
        nome:{
          type:Sequelize.STRING,
          allowNull: false,
        },
        preco:{
        type: Sequelize.DECIMAL,
        allowNull:false
        },
        quantidade:{
          type:Sequelize.INTEGER,
          allowNull:false
        }
       
})
module.exports = Carrinho;