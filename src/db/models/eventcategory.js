'use strict'
module.exports = (sequelize, DataTypes) => {
  const EventCategory = sequelize.define(
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
