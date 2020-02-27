'use strict'

module.exports = function(sequelize, DataTypes) {
  var EventDay = sequelize.define(
    'EventDay',
    {
      event_id: DataTypes.STRING,
      day_id: DataTypes.STRING,
      questions: DataTypes.BOOLEAN,
      feedback: DataTypes.BOOLEAN,
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
