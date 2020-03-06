/*  run all database queries for lineup here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async getLineup(day_id) {
    return Promise.resolve(
      db.Lineup.findOne({
        where: { day_id: day_id }
      })
    )
  },

  async createLineup(data, event_id) {
    //delete all lineup with that day before saving new one
    db.Lineup.destroy({
      where: { day_id: data[0].day_id, event_id: event_id }
    })
    let lineupData = []
    for (let i = 0; i < data.length; i++) {
      let sampledata = {
        event_id: event_id,
        start_time: data[i].start_time,
        end_time: data[i].end_time,
        day_id: data[i].day_id,
        description: data[i].description,
        activity: data[i].activity,
        duration: data[i].duration,
        lineup_id: util.genuuid()
      }
      lineupData.push(sampledata)
    }
    return Promise.resolve(db.Lineup.bulkCreate(lineupData))
  },

  async editLineup(data, day_id) {
    //delete all lineup with that day
    db.Lineup.destroy({
      where: { day_id: day_id }
    })
    let lineupData = []
    for (let i = 0; i < data.length; i++) {
      let sampledata = {
        event_id: data[i].event_id,
        start_time: data[i].start_time,
        end_time: data[i].end_time,
        day_id: data[i].day_id,
        decription: data[i].description,
        activity: data[i].activity,
        lineup_id: util.genuuid()
      }
      lineupData.push(sampledata)
    }

    return Promise.resolve(db.Lineup.bulkCreate(lineupData))
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

  async getLineupByDay(params) {
    return await db.Lineup.findAll({
      where: { event_id: params.event_id, day_id: params.day_id }
    })
  }
}
