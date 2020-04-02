/*  run all database queries for feedback here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async createFeedback(data) {
    return Promise.resolve(
      db.Feedback.create({
        feedback_id: util.genuuid(),
        feedback: data.feedback,
        event_id: data.event_id,
        day_id: data.day_id
      })
    )
  },

  async getFeedbackById(data) {
    return await db.Feedback.findAll({
      where: { event_id: data.event_id, day_id: data.day_id }
    })
  }
}
