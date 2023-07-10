'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports  =  {
  up(queryInterface, Sequelize) {


    return queryInterface.createTable('produtos', {
      id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false
    },
    
      
  });    
  
},

  down: (queryInterface, Sequelize) => {
    
   
  return queryInterface.dropTable('produtos');

}
}
