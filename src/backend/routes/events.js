/*  contains event routes */

import express from 'express'
import multer from 'multer'
import eventController from '../controllers/eventController'
import lineupController from '../controllers/lineupController'

// import { validateEvent } from '../request/validation/validateEvent'

const routes = express.Router()

routes.post(
  '/createevent',
  // validateEvent('createEvent'),
  multer({ dest: 'temp/' }).single('event_image'),
  eventController.createEvent
)
routes.put(
  '/editevent/:event_id',
  // validateEvent('editEvent'),
  multer({ dest: 'temp/' }).single('event_image'),
  eventController.editEvent
)
routes.get('/getallevents', eventController.getAllEvents)
routes.get('/getevent/:event_id', eventController.getEventById)
routes.get('/getuserevents/:user_id', eventController.getUserEvents)

routes.delete('/deleteevent/:event_id', eventController.deleteEvent)
routes.patch('/publishevent/:event_id', eventController.publishEvent)
routes.patch('/unpublishevent/:event_id', eventController.unpublishEvent)

/* event line up routes appear here */
routes.post('/:event_id/createlineup', lineupController.createLineup)
routes.get('/:event_id/geteventlineup', lineupController.getEventLineup)
routes.put('/:event_id/editlineup/:day_id', lineupController.editEventLineup)
routes.delete(
  '/deleteeventlineup/:lineup_id',
  lineupController.deleteEventLineup
)

/* event feedback and quetions */

// routes.put(
//   '/feedback/editfeedback/:feedback_id',
//   feedbackController.editFeedback
// )
// routes.delete(
//   '/feedback/deletefeedback/:feedback_id',
//   feedbackController.deleteFeedback
// )
// routes.get(
//   '/questions/getallquestions/:event_id/:day_id',
//   feedbackController.getQuestions
// )
// routes.put(
//   '/questions/editquestion/:question_id',
//   feedbackController.editQuestion
// )
// routes.delete(
//   '/questions/deletequestion/:question_id',
//   feedbackController.deleteQuestion
// )

routes.get('/getlineupbyday/:event_id/:day_id', eventController.getLineupByDay)

module.exports = routes
