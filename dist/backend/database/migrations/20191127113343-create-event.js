'use strict'

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.STRING
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_days: {
        type: Sequelize.INTEGER
      },
      event_status: {
        type: Sequelize.BOOLEAN
      },
      event_image: {
        type: Sequelize.STRING
      },
      event_dates: {
        type: Sequelize.TEXT
      },
      event_image_thumb: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      event_url: {
        type: Sequelize.STRING
      },
      url_snippet: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Events')
  }
}
