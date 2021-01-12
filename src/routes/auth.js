import express from 'express'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.post('/register', async (req, res) => {
  const handler = container.resolve('register')
  const resp = await handler(req, res)
  return respondWithData(resp, res)
})

routes.post('/login', async (req, res) => {
  const handler = container.resolve('login')
  const resp = await handler(req, res)
  return respondWithData(resp, res)
})

routes.post('/loginwithgoogle', async (req, res) => {
  const handler = container.resolve('loginWithGoogle')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.post('/loginwithfacebook', async (req, res) => {
  const handler = container.resolve('loginWithFacebook')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

export default routes
