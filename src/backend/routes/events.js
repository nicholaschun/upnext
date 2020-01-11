/*  contains event routes */

import express from 'express'

const routes = express.Router()

import eventController from '../controllers/eventController'
import lineupController from '../controllers/lineupController'
import feedbackController from '../controllers/feedbackController'

import { validateEvent } from '../request/validation/validateEvent'

routes.post(
  '/createevent',
  validateEvent('createEvent'),
  eventController.createEvent
)
routes.put(
  '/editevent/:event_id',
  validateEvent('editEvent'),
  eventController.editEvent
)
routes.get('/getallevents', eventController.getAllEvents)
routes.get('/getevent/:event_id', eventController.getEventById)
routes.get('/getuserevents/:user_id', eventController.getUserEvents)
routes.delete('/deleteevent/:event_id', eventController.deleteEvent)
routes.patch('/publishevent/:event_id', eventController.publishEvent)

/* event line up routes appear here */
routes.post('/:event_id/createlineup', lineupController.createLineup)
routes.get('/:event_id/geteventlineup', lineupController.getEventLineup)
routes.put('/editeventlineup/:lineup_id', lineupController.editEventLineup)
routes.delete(
  '/deleteeventlineup/:lineup_id',
  lineupController.deleteEventLineup
)

/* event feedback and quetions */
routes.post(
  '/feedback/createfeedback/:event_id',
  feedbackController.createFeedback
)
routes.get('/feedback/getfeedbacks/:event_id', feedbackController.getFeedback)
routes.put(
  '/feedback/editfeedback/:feedback_id',
  feedbackController.editFeedback
)
routes.delete(
  '/feedback/deletefeedback/:feedback_id',
  feedbackController.deleteFeedback
)

routes.post(
  '/questions/createquestions/:event_id',
  feedbackController.createQuestion
)
routes.get('/feedback/getquestions/:event_id', feedbackController.getQuestions)
routes.put(
  '/feedback/editquestion/:question_id',
  feedbackController.editQuestion
)
routes.delete(
  '/feedback/deletequestion/:question_id',
  feedbackController.deleteQuestion
)

module.exports = routes
