import express from 'express'
import passport from 'passport'
import config from './../../config'
import events from './events'
import users from './users'
import auth from './authproviders'

const { baseUrl } = config

const router = express.Router()

router.use(
  `${baseUrl}/events`,
  passport.authenticate('jwt', { session: false }),
  events
)
// router.use(`${baseUrl}/users`, users)
// router.use(`${baseUrl}/auth`, auth)

export default router
