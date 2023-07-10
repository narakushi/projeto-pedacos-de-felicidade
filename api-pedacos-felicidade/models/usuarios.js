const database = require('../database/index.js') 
const Sequelize = require('sequelize');

const usuario = database.define('usuarios',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      
        },
        email:{
          type:Sequelize.STRING,
          allowNull: false,
        },
        senha:{
        type: Sequelize.DECIMAL,
        allowNull:false
        }, 
        online:{
          type:Sequelize.BOOLEAN,
          allowNull: false
        }
       
});

module.exports =  usuario;