'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userprograms', {
      UserId: {
        type: Sequelize.INTEGER,
        references:{
          model: "users",
          key: 'id'
        }
      },
      ProgramId: {
        type: Sequelize.INTEGER,
        references:{
          model: "programs",
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userprograms');
  }
};