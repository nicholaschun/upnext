/*  run all database queries for questions here */

import db from '../../database/models/index'

module.exports = {

    async createQuestion(data, event_id) {
        console.log(data)
        return Promise.resolve(
          db.Question.create({
            question: data.question,
            name: data.name,
            email: data.email,
            event_id: event_id
          })
        )
      },
    
      async getQuestionById(id) {
        return await db.Question.findAll({
          where: { event_id: id }
        })
      }
}
