'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', { 
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      office: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      registrationDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ufOfBirth: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      wage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};
