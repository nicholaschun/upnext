/*  run all database queries for feedback here */

import db from '../../database/models/index'

module.exports = {
  async createFeedback(data, event_id) {
    return Promise.resolve(
      db.Feedback.create({
        feedback: data.feedback,
        event_id: event_id
      })
    )
  },

  async getFeedbackById(id) {
    return await db.Feedback.findAll({
      where: { event_id: id }
    })
  }
}
