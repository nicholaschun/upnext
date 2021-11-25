'use strict'

module.exports = function(sequelize, DataTypes) {
  var LoginProvider = sequelize.define(
    'LoginProvider',
    {
      name: DataTypes.STRING
    },
    {}
  )

  LoginProvider.associate = function(models) {
    // associations can be defined here
  }

  return LoginProvider
}
