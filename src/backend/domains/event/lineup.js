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
    data.forEach(event => {
      return db.Lineup.create({
        lineup_id: util.genuuid(),
        event_id,
        start_time: event.start_time,
        end_time: event.end_time,
        description: event.description,
        duration: event.duration,
        facilitator: event.facilitator
      })
    })
  },

  async editLineup(data, lineup_id) {
    data.forEach(event => {
      return db.Lineup.update(
        {
          start_time: event.start_time,
          end_time: event.end_time,
          description: event.description,
          duration: event.duration,
          facilitator: event.facilitator
        },
        { where: { lineup_id: lineup_id } }
      )
    })
  },

  async deleteLineup(lineup_id) {
    return await db.Lineup.destroy({
      where: { lineup_id: lineup_id }
    })
  }
}
