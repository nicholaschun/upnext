'use strict'
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      event_id: DataTypes.STRING,
      event_name: DataTypes.STRING,
      event_days: DataTypes.INTEGER,
      event_category: DataTypes.INTEGER,
      event_status: DataTypes.BOOLEAN,
      event_image: DataTypes.STRING,
      has_feedback: DataTypes.BOOLEAN,
      has_questions: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
      event_url: DataTypes.STRING,
      url_snippet: DataTypes.STRING,
      additional_info: DataTypes.TEXT
    },
    {}
  )
  Event.associate = function(models) {
    // associations can be defined here

    Event.hasOne(models.EventCategory, {
      foreignKey: 'id',
      targetKey: 'event_category'
    })
    Event.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' })
  }
  return Event
}
