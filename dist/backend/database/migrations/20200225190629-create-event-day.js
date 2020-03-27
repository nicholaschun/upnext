'use strict'

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('EventDays', {
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
      date: {
        type: Sequelize.STRING
      },
      has_questions: {
        type: Sequelize.BOOLEAN
      },
      has_feedback: {
        type: Sequelize.BOOLEAN
      },
      hide_time: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('EventDays')
  }
}
