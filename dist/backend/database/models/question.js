'use strict'

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define(
    'Question',
    {
      question_id: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      question: DataTypes.STRING
    },
    {}
  )

  Question.associate = function(models) {
    // associations can be defined here
  }

  return Question
}
