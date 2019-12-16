/*  contains event routes */

import express from 'express'

const routes = express.Router()

import eventController from '../controllers/eventController'
import { validateEvent } from '../request/validation/validateEvent'

routes.post(
  '/createEvent',
  validateEvent('createEvent'),
  eventController.createEvent
)
routes.put('/editEvent', validateEvent('editEvent'), eventController.editEvent)
routes.get('/getAllEvents', eventController.getAllEvents)
routes.get('/getEvent', eventController.getEventById)
routes.get('/getUser', eventController.getUserEvents)
routes.delete('/deleteEvent', eventController.deleteEvent)

module.exports = routes
