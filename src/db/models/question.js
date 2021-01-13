'use strict'
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      name: DataTypes.STRING,
      event_id: DataTypes.STRING,
      day_id: DataTypes.STRING,
      question_id: DataTypes.STRING,
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
