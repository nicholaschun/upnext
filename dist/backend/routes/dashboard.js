'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _dashboardController = _interopRequireDefault(
  require('./../controllers/dashboardController')
)

var routes = _express['default'].Router()

routes.get('/', _dashboardController['default'].dashboard)
routes.get('/profile', _dashboardController['default'].profile)
routes.get('/lineup', _dashboardController['default'].lineupPage)
routes.get('/createevent', _dashboardController['default'].createEventPage)
routes.get('/editevent', _dashboardController['default'].editEventPage)
routes.get('/feedback', _dashboardController['default'].feedbackPage)
routes.get('/questions', _dashboardController['default'].questionsPage)
routes.get('/changepassword', _dashboardController['default'].changePassPage)
routes.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/')
})
module.exports = routes
