import express from 'express'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.get('/', async (req, res) => {
  const handler = container.resolve('getAllEvents')
  const resp = await handler()
  return respondWithData(resp, res)
})

routes.get('/search/:field', async (req, res) => {
  const handler = container.resolve('searchEvent')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.get('/user/:user_id', async (req, res) => {
  const handler = container.resolve('getUserEvents')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.get('/:event_id', async (req, res) => {
  const handler = container.resolve('getOneEvent')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.post('/', async (req, res) => {
  const handler = container.resolve('createEvent')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.patch('/:event_id', async (req, res) => {
  const handler = container.resolve('editEvent')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.delete('/:event_id', async (req, res) => {
  const handler = container.resolve('deleteEvent')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.patch('/day/:day_id', async (req, res) => {
  const handler = container.resolve('editEventDay')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.post('/day/:event_id', async (req, res) => {
  const handler = container.resolve('createEventDay')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.delete('/day/:day_id', async (req, res) => {
  const handler = container.resolve('deleteEventDay')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

export default routes
