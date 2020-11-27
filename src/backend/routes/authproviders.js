import express from 'express'
import passport from 'passport'

import userController from '../controllers/userController'
import { validateUser } from '../request/validation/validateUser'

const routes = express.Router()

routes.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)
routes.get('/facebook', passport.authenticate('facebook'))

routes.get(
  '/google/redirect',
  passport.authenticate('google', { failureRedirect: '/register' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)
routes.get(
  '/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/register' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

routes.post('/register', validateUser('createUser'), userController.createUser)
routes.post('/login', validateUser('loginUser'), userController.tokenLogin)
routes.post('/loginwithgoogle', userController.loginWithGoogle)
routes.post('/loginwithfacebook', userController.loginWithFacebook)

module.exports = routes
