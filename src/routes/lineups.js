import express from 'express'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.post('/:event_id/:day_id', async (req, res) => {
  const handler = container.resolve('saveLineup')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

routes.get('/:day_id', async (req, res) => {
  const handler = container.resolve('getLineups')
  const resp = await handler(req)
  return respondWithData(resp, res)
})

export default routes
