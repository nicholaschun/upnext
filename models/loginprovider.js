'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoginProvider = sequelize.define('LoginProvider', {
    name: DataTypes.STRING
  }, {});
  LoginProvider.associate = function(models) {
    // associations can be defined here
  };
  return LoginProvider;
};