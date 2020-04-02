'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _guestController = _interopRequireDefault(
  require('./../controllers/guestController')
)

var _eventController = _interopRequireDefault(
  require('./../controllers/eventController')
)

var _feedbackController = _interopRequireDefault(
  require('./../controllers/feedbackController')
)

var _validateEvent = require('../request/validation/validateEvent')

var routes = _express['default'].Router()

routes.get('/', _guestController['default'].homePage)
routes.get('/register', _guestController['default'].signUpPage)
routes.get('/resetpassword', _guestController['default'].resetPassPage)
routes.get(
  '/geteventbysnippet/:snippet',
  _eventController['default'].getEventbySnippet
)
routes.get(
  '/getuserlineupbyday/:event_id/:day_id',
  _eventController['default'].getLineupByDay
)
routes.post(
  '/sendfeedback',
  (0, _validateEvent.validateEvent)('createFeedback'),
  _feedbackController['default'].sendFeedback
)
routes.post(
  '/sendquestion',
  (0, _validateEvent.validateEvent)('createQuestion'),
  _feedbackController['default'].sendQuestion
)
module.exports = routes
