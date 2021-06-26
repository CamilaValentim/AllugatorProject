'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees',
     [{
        cpf:'85235708709',
        name: 'Aaron Aaberg',
        office: 'Dev Jr',
        registrationDate: '2017-04-15',
        ufOfBirth: 'AP',
        wage: 8965.30,
        status: 'ATIVO',
      },

      {
        cpf:'59984408701',
        name: 'Aaron Aaby',
        office: 'AC Sr',
        registrationDate: '2017-04-19',
        ufOfBirth: 'RO',
        wage: 5312.70,
        status: 'ATIVO',
      },

      {
        cpf:'51704568080',
        name: 'Abbey Aadland',
        office: 'Analista Sr',
        registrationDate: '2017-04-03',
        ufOfBirth: 'RJ',
        wage: 5448.60,
        status: 'ATIVO',
      },

      {
        cpf:'32439637882',
        name: 'Abbie Aagaard',
        office: 'PO Jr',
        registrationDate: '2017-04-19',
        ufOfBirth: 'PR',
        wage: 3655.10,
        status: 'BLOQUEADO',
      },
      

    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
