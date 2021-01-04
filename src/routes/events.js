/*  contains event routes */

import express from 'express'
import multer from 'multer'
import passport from 'passport'
import container from './../dependency'
// import eventController from '../controllers/eventController'
// import lineupController from '../controllers/lineupController'

// import { validateEvent } from '../request/validation/validateEvent'

const routes = express.Router()

// routes.post(
//   '/createevent',
//   // validateEvent('createEvent'),
//   multer({ dest: 'temp/' }).single('event_image'),
//   eventController.createEvent
// )
// routes.put(
//   '/editevent/:event_id',
//   // validateEvent('editEvent'),
//   multer({ dest: 'temp/' }).single('event_image'),
//   eventController.editEvent
// )
routes.get('/', async (req, res) => {
  const handler = container.resolve('getAllEvents')
  const resp = await handler()
  return res.json(resp)
})

routes.get('/user/:user_id', async (req, res) => {
  const handler = container.resolve('getUserEvents')
  const resp = await handler(req)
  return res.json(resp)
})

routes.get('/:event_id', async (req, res) => {
  const handler = container.resolve('getOneEvent')
  const resp = await handler(req)
  return res.json(resp)
})

routes.post(
  '/',
  multer({ dest: 'temp/' }).single('event_image'),
  async (req, res) => {
    const handler = container.resolve('createEvent')
    const resp = await handler(req)
    return res.json(resp)
  }
)

routes.patch(
  '/:event_id',
  multer({ dest: 'temp/' }).single('event_image'),
  (req, res) => {
    const handler = container.resolve('editEvent')
    const resp = handler(req)
    return res.json(resp)
  }
)

routes.delete('/:event_id', (req, res) => {
  const handler = container.resolve('deleteEvent')
  const resp = handler(req)
  return res.json(resp)
})

// routes.get('/getevent/:event_id', eventController.getEventById)
// routes.get('/getuserevents/:user_id', eventController.getUserEvents)

// routes.delete('/deleteevent/:event_id', eventController.deleteEvent)
// routes.patch('/publishevent/:event_id', eventController.publishEvent)
// routes.patch('/unpublishevent/:event_id', eventController.unpublishEvent)

// /* event line up routes appear here */
// routes.post('/:event_id/lineup', lineupController.createLineup)
// routes.get('/:event_id/lineup/:day_id', lineupController.getEventLineup)
// routes.put('/:event_id/lineup/:day_id', lineupController.editEventLineup)
// routes.delete('/lineup/:lineup_id', lineupController.deleteEventLineup)

// routes.get('/getlineupbyday/:event_id/:day_id', eventController.getLineupByDay)

export default routes
