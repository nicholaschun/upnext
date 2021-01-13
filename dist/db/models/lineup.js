'use strict'

module.exports = function(sequelize, DataTypes) {
  var Lineup = sequelize.define(
    'Lineup',
    {
      lineup_id: DataTypes.STRING,
      event_id: DataTypes.STRING,
      start_time: DataTypes.STRING,
      day_id: DataTypes.STRING,
      day: DataTypes.INTEGER,
      end_time: DataTypes.STRING,
      description: DataTypes.TEXT,
      activity: DataTypes.TEXT,
      duration: DataTypes.STRING,
      duration_as_milli: DataTypes.INTEGER,
      facilitator: DataTypes.STRING
    },
    {}
  )

  Lineup.associate = function(models) {
    // associations can be defined here
    Lineup.belongsTo(models.EventDay, {
      foreignKey: 'day_id',
      targetKey: 'day_id'
    })
  }

  return Lineup
}
