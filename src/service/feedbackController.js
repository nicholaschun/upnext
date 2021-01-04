import { createFeedback, getFeedbackById } from '../domains/event/feedback'

import { createQuestion, getQuestionById } from '../domains/event/question'

import { validate } from './../utils/validate'

module.exports = {
  async sendFeedback(req, res) {
    validate(req, res)
    try {
      const feedback = await createFeedback(req.body)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async getFeedback(req, res) {
    try {
      const feedback = await getFeedbackById(req.params)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async sendQuestion(req, res) {
    validate(req, res)
    try {
      const question = await createQuestion(req.body)
      return res.json(question)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async getQuestions(req, res) {
    try {
      const feedback = await getQuestionById(req.params)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async editQuestion(req, res) {},
  async deleteQuestion(req, res) {}
}
