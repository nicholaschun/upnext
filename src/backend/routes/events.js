/*  contains event routes */

import express from 'express'

const routes = express.Router()

import eventController from '../controllers/eventController'
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

module.exports = routes
