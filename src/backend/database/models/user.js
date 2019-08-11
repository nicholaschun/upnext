'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    login_provider: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN,
    verify_token: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // models.hasOne('UserProfile', {foreignKey: 'user_id'})
  };
  return User;
};