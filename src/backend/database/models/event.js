'use strict'
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      event_id: DataTypes.STRING,
      event_name: DataTypes.STRING,
      event_days: DataTypes.INTEGER,
      event_status: DataTypes.BOOLEAN,
      event_image: DataTypes.STRING,
      event_dates: DataTypes.TEXT,
      event_image_thumb: DataTypes.STRING,
      user_id: DataTypes.STRING,
      event_url: DataTypes.STRING,
      url_snippet: DataTypes.STRING,
      description: DataTypes.TEXT
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
