'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _feedbackController = _interopRequireDefault(
  require('../controllers/feedbackController')
)

var routes = _express['default'].Router()

routes.get(
  '/getallfeedback/:event_id/:day_id',
  _feedbackController['default'].getFeedback
)
module.exports = routes
