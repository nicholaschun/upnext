import express from 'express'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.get('/authuser', async (req, res) => {
  const handler = container.resolve('authenticatedUser')
  const resp = await handler(req, res)
  return respondWithData(resp, res)
})

routes.patch('/:user_id', async (req, res) => {
  const handler = container.resolve('editUser')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

export default routes
