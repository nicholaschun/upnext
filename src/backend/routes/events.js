/*  contains event routes */

import express from 'express'

const routes = express.Router()

import eventController from '../controllers/eventController'
import lineupController from '../controllers/lineupController'

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
module.exports = routes
