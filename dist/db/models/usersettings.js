'use strict'

module.exports = function(sequelize, DataTypes) {
  var UserSettings = sequelize.define(
    'UserSettings',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      user_id: DataTypes.STRING,
      plan: DataTypes.STRING
    },
    {}
  )

  UserSettings.associate = function(models) {
    // associations can be defined here
  }

  return UserSettings
}
