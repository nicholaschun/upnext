'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    sub_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    login_provider: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN,
    verify_token: DataTypes.STRING,
    type: DataTypes.INTEGER
  })
  User.associate = models => {
    // associations can be defined here
    User.hasOne(models.UserProfile, { foreignKey: 'user_id', targetKey: 'id' })
    User.hasOne(models.Event, { foreignKey: 'user_id', targetKey: 'id' })
  }
  return User
}
