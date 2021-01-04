/*  run all database queries for questions here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async createQuestion(data) {
    return Promise.resolve(
      db.Question.create({
        question_id: util.genuuid(),
        question: data.question,
        name: data.name,
        email: data.email,
        event_id: data.event_id,
        day_id: data.day_id
      })
    )
  },

  async getQuestionById(data) {
    return await db.Question.findAll({
      where: { event_id: data.event_id, day_id: data.day_id }
    })
  }
}
