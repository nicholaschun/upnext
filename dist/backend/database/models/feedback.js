'use strict'

module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define(
    'Feedback',
    {
      feedback: DataTypes.TEXT,
      event_id: DataTypes.STRING,
      day_id: DataTypes.STRING
    },
    {}
  )

  Feedback.associate = function(models) {
    // associations can be defined here
  }

  return Feedback
}
