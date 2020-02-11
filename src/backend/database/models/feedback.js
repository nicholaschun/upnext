'use strict'
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define(
    'Feedback',
    {
      feedback: DataTypes.STRING,
      event_id: DataTypes.STRING
    },
    {}
  )
  Feedback.associate = function(models) {
    // associations can be defined here
  }
  return Feedback
}
