'use strict'

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Lineups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lineup_id: {
        type: Sequelize.STRING
      },
      day_id: {
        type: Sequelize.STRING
      },
      event_id: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      activity: {
        type: Sequelize.TEXT
      },
      duration: {
        type: Sequelize.STRING
      },
      duration_as_milli: {
        type: Sequelize.INTEGER
      },
      facilitator: {
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
    return queryInterface.dropTable('Lineups')
  }
}
