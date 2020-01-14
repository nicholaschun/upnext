import {
  createFeedback,
  getFeedback,
  editFeedback,
  deleteFeedback
} from '../domains/event/feedback'

import {
  createQuestion,
  getQuestions,
  editQuestion,
  deleteQuestion
} from '../domains/event/question'

module.exports = {
  async createFeedback(req, res) {
    try {
      const feedback = await createFeedback(req.body, req.params.event_id)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async getFeedback(req, res) {
    try {
      const feedback = await getFeedback(req.params.event_id)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async editFeedback(req, res) {
    try {
      const body = {
        feedback: req.body.feedback
      }
      const feedback = await editFeedback(body, req.params.feedback_id)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async deleteFeedback(req, res) {
    try {
      const feedback = await deleteFeedback(req.params.feedback_id)
      return res.json(feedback)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async createQuestion(req, res) {
    try {
      const question = await createQuestion(req.body, req.params.event_id)
      return res.json(question)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async getQuestions(req, res) {
    try {
      const questions = await getQuestions(req.params.event_id)
      return res.json(questions)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async editQuestion(req, res) {
    try {
      const body = {
        name: req.body.name,
        email: req.body.email,
        question: req.body.question
      }
      const question = await editQuestion(body, req.params.question_id)
      return res.json(question)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async deleteQuestion(req, res) {
    try {
      const question = await deleteQuestion(req.params.question_id)
      return res.json(question)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
