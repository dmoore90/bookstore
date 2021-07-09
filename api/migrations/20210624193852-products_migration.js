'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Products', { 
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          prod_number: {
            type: Sequelize.STRING(45),
            allowNull: false
          },
          name: {
            type: Sequelize.STRING(45),
            allowNull: false
          },
          price: {
            type: Sequelize.STRING(45),
            allowNull: false
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Products');
  }
};
