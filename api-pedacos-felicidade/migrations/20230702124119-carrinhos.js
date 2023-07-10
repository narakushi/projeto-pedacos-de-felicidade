'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports  =  {
up(queryInterface, Sequelize) {
    
      return queryInterface.createTable('carrinhos', { 
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
    
   
      return queryInterface.dropTable('carrinhos');
    
  }
}


