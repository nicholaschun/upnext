import express from 'express'
import passport from 'passport'

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

module.exports = routes
