import express from 'express'
import feedbackController from '../controllers/feedbackController'

const routes = express.Router()

routes.get('/getallfeedback/:event_id/:day_id', feedbackController.getFeedback)

module.exports = routes
