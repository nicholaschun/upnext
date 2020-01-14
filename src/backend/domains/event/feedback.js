/*  run all database queries for feedback here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async createFeedback(data, event_id) {
    return await db.Feedback.create({
      feedback_id: util.genuuid(),
      feedback: data.feedback
    })
  },
  async getFeedback(event_id) {
    return await db.Feedback.findOne()
  },
  async editFeedback(data, feedback_id) {
    return await db.Feedback.update(
      {
        feedback: data.feedback
      },
      { where: { feedback_id: feedback_id } }
    )
  },
  async deleteFeedback(feedback_id) {
    return await db.Feedback.destroy({
      where: { feedback_id: feedback_id }
    })
  }
}
