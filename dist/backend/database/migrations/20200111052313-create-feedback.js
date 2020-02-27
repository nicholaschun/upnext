'use strict'

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.STRING
      },
      day_id: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Feedbacks')
  }
}
