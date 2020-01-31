'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _passport = _interopRequireDefault(require('passport'))

var routes = _express['default'].Router()

routes.get(
  '/google',
  _passport['default'].authenticate('google', {
    scope: ['profile', 'email']
  })
)
routes.get('/facebook', _passport['default'].authenticate('facebook'))
routes.get(
  '/google/redirect',
  _passport['default'].authenticate('google', {
    failureRedirect: '/register'
  }),
  function(req, res) {
    res.redirect('/dashboard')
  }
)
routes.get(
  '/facebook/redirect',
  _passport['default'].authenticate('facebook', {
    failureRedirect: '/register'
  }),
  function(req, res) {
    res.redirect('/dashboard')
  }
)
module.exports = routes
