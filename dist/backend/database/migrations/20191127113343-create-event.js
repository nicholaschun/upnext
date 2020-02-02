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
      event_category: {
        type: Sequelize.INTEGER
      },
      event_status: {
        type: Sequelize.BOOLEAN
      },
      event_image: {
        type: Sequelize.STRING
      },
      event_image_thumb: {
        type: Sequelize.STRING
      },
      has_feedback: {
        type: Sequelize.BOOLEAN
      },
      has_questions: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      event_url: {
        type: Sequelize.STRING
      },
      url_snippet: {
        type: Sequelize.STRING
      },
      additional_info: {
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