import express from 'express'
import passport from 'passport'
import config from '../config'
import events from './events'
import lineups from './lineups'
import users from './users'
import auth from './auth'
import uploadFile from './upload'

const { baseUrl } = config

const router = express.Router()

router.use(
  `${baseUrl}/events`,
  passport.authenticate('jwt', { session: false }),
  events
)
router.use(
  `${baseUrl}/events/lineups`,
  passport.authenticate('jwt', { session: false }),
  lineups
)
router.use(
  `${baseUrl}/users`,
  passport.authenticate('jwt', { session: false }),
  users
)

router.use(
  `${baseUrl}/uploadfile`,
  // passport.authenticate('jwt', { session: false }),
  uploadFile
)
router.use(`${baseUrl}/auth`, auth)

export default router
