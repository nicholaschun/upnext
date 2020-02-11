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
    return Promise.resolve(
      data.forEach(event => {
        db.Lineup.create({
          lineup_id: util.genuuid(),
          event_id: event_id,
          day: event.day,
          start_time: event.start_time,
          end_time: event.end_time,
          description: event.description,
          duration: event.duration,
          facilitator: event.facilitator
        })
      })
    )
  },

  async editLineup(data, event_id) {
    data.forEach(event => {
      return db.Lineup.update(
        {
          day: event.day,
          start_time: event.start_time,
          end_time: event.end_time,
          description: event.description,
          duration: event.duration,
          facilitator: event.facilitator
        },
        { where: { event_id: event_id } }
      )
    })
  },

  async deleteLineup(event_id) {
    return await db.Lineup.destroy({
      where: { event_id: event_id }
    })
  },

  async deleteSingleLineup(lineup_id) {
    return await db.Lineup.destroy({
      where: { lineup_id: lineup_id }
    })
  },

}
