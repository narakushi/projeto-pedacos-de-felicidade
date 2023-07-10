'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('usuarios', { 
        id: {
          type:Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
    
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
          },
        online:{
          type: Sequelize.BOOLEAN,
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
    
      return queryInterface.dropTable('usuarios');
  
  }
};
