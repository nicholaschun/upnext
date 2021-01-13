'use strict'
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      event_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      event_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      is_public: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
      event_image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      event_image_thumb: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      event_url: {
        type: DataTypes.STRING
      },
      url_snippet: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {}
  )
  Event.associate = function(models) {
    // associations can be defined here

    Event.hasOne(models.EventCategory, {
      foreignKey: 'id',
      targetKey: 'event_category'
    })
    Event.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    })
    Event.belongsTo(models.Lineup, {
      foreignKey: 'event_id',
      targetKey: 'event_id'
    })
    Event.hasMany(models.EventDay, {
      foreignKey: 'event_id',
      sourceKey: 'event_id'
    })
  }
  return Event
}
