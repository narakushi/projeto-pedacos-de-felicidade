
const  {Model, DataTypes}  = require ('sequelize');
const Sequelize = require('sequelize')
const database = require('../database/index.js')
/*
class Produtos extends Model{
    static init (sequelize){
        super.init ({
        nome: DataTypes.STRING,
        preco: DataTypes.DECIMAL,
        descricao : DataTypes.STRING
        
        }, {sequelize})
    
    }

}

module.exports =  Produtos;
*/
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
    descricao: Sequelize.STRING    
    })
    

    module.exports =  Produtos;


 