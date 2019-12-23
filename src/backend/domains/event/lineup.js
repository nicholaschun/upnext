/*  run all database queries for lineup here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async getLineup(event_id) {
    return await db.Lineup.findOne({
      where: { event_id: event_id }
    })
  },

  async createLineup(data, event_id) {
    return await db.Lineup.create({
      lineup_id: util.genuuid(),
      event_id: data.event_id,
      start_time: data.start_time,
      end_time: data.end_time,
      description: data.description,
      duration: data.duration,
      facilitator: data.facilitator
    })
  },

  async editLineup(data, lineup_id) {
    return await db.Lineup.update(
      {
        start_time: data.start_time,
        end_time: data.end_time,
        description: data.description,
        duration: data.duration,
        facilitator: data.facilitator
      },
      { where: { lineup_id: lineup_id } }
    )
  },

  async deleteLineup(lineup_id) {
    return await db.Lineup.destroy({
      where: { lineup_id: lineup_id }
    })
  }
}
