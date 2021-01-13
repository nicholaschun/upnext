'use strict'

module.exports = function(sequelize, DataTypes) {
  var EventCategory = sequelize.define(
    'EventCategory',
    {
      name: DataTypes.STRING
    },
    {}
  )

  EventCategory.associate = function(models) {
    // associations can be defined here
  }

  return EventCategory
}
