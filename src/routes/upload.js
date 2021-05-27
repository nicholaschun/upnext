import express from 'express'
import multer from 'multer'
import container from './../dependency'
import { respondWithData } from './../utils'

const routes = express.Router()
routes.post('/', multer({ dest: 'temp/' }).single('file'), async (req, res) => {
  const handler = container.resolve('uploadFile')
  const resp = await handler(req, res)
  return respondWithData(resp, res)
})

export default routes
