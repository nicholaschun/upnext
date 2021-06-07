'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
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
      event_status: {
        type: Sequelize.BOOLEAN
      },
      event_image: {
        type: Sequelize.STRING
      },
      event_image_thumb: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      is_public: {
        type: Sequelize.BOOLEAN
      },
      is_draft: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events')
  }
}
