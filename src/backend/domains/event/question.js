/*  run all database queries for questions here */

import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async createQuestion(data, event_id) {
    return await db.Question.create({
      question_id: util.genuuid(),
      name: data.name,
      email: data.email,
      question: data.question
    })
  },

  async getQuestions(event_id) {
    return await db.Question.findAll()
  },

  async editQuestion(data, question_id) {
    return await db.Question.update(
      {
        name: data.name,
        email: data.email,
        question: data.question
      },
      { where: { question_id: question_id } }
    )
  },

  async deleteQuestion(question_id) {
    return await db.Question.destroy({
      where: { question_id: question_id }
    })
  }
}
