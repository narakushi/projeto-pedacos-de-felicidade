'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports  =  {
up(queryInterface, Sequelize) {
    
      return queryInterface.createTable('cadastros', { 
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
         },
        createdAt: {
          type: Sequelize.DATE,
          allowNull:false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull:false
        }
        
    
    });
    
  },

  down: (queryInterface, Sequelize) => {
    
   
      return queryInterface.dropTable('cadastros');
    
  }
}


