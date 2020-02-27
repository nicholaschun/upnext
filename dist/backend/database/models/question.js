'use strict'

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define(
    'Question',
    {
      name: DataTypes.STRING,
      event_id: DataTypes.STRING,
      day_id: DataTypes.STRING,
      email: DataTypes.STRING,
      question: DataTypes.TEXT
    },
    {}
  )

  Question.associate = function(models) {
    // associations can be defined here
  }

  return Question
}
