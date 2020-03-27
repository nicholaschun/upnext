'use strict'
module.exports = (sequelize, DataTypes) => {
  const EventDay = sequelize.define(
    'EventDay',
    {
      event_id: DataTypes.STRING,
      day_id: DataTypes.STRING,
      has_questions: DataTypes.BOOLEAN,
      has_feedback: DataTypes.BOOLEAN,
      hide_time: DataTypes.BOOLEAN,
      date: DataTypes.STRING
    },
    {}
  )
  EventDay.associate = function(models) {
    // associations can be defined here
    EventDay.hasMany(models.Lineup, {
      foreignKey: 'day_id',
      targetKey: 'day_id'
    })
  }
  return EventDay
}
