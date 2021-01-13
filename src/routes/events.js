import express from 'express'
import multer from 'multer'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.get('/', async (req, res) => {
  const handler = container.resolve('getAllEvents')
  const resp = await handler()
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

routes.post(
  '/',
  multer({ dest: 'temp/' }).single('event_image'),
  async (req, res) => {
    const handler = container.resolve('createEvent')
    const resp = await handler(req)
    return respondWithData(resp, res)
  }
)

routes.patch(
  '/:event_id',
  multer({ dest: 'temp/' }).single('event_image'),
  async (req, res) => {
    const handler = container.resolve('editEvent')
    const resp = await handler(req)
    return respondWithData(resp, res)
  }
)

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

routes.delete('/day/:day_id', async (req, res) => {
  const handler = container.resolve('deleteEventDay')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

export default routes
