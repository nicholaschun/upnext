'use strict'
module.exports = (sequelize, DataTypes) => {
  const Lineup = sequelize.define(
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
      facilitator: DataTypes.STRING
    },
    {}
  )
  Lineup.associate = function(models) {
    // associations can be defined here
  }
  return Lineup
}
