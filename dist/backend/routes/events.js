'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _eventController = _interopRequireDefault(
  require('../controllers/eventController')
)

var _lineupController = _interopRequireDefault(
  require('../controllers/lineupController')
)

var _feedbackController = _interopRequireDefault(
  require('../controllers/feedbackController')
)

var _validateEvent = require('../request/validation/validateEvent')

/*  contains event routes */
var routes = _express['default'].Router()

routes.post(
  '/createevent',
  (0, _validateEvent.validateEvent)('createEvent'),
  _eventController['default'].createEvent
)
routes.put(
  '/editevent/:event_id',
  (0, _validateEvent.validateEvent)('editEvent'),
  _eventController['default'].editEvent
)
routes.get('/getallevents', _eventController['default'].getAllEvents)
routes.get('/getevent/:event_id', _eventController['default'].getEventById)
routes.get('/getuserevents/:user_id', _eventController['default'].getUserEvents)
routes['delete'](
  '/deleteevent/:event_id',
  _eventController['default'].deleteEvent
)
routes.patch(
  '/publishevent/:event_id',
  _eventController['default'].publishEvent
)
/* event line up routes appear here */

routes.post(
  '/:event_id/createlineup',
  _lineupController['default'].createLineup
)
routes.get(
  '/:event_id/geteventlineup',
  _lineupController['default'].getEventLineup
)
routes.put(
  '/editeventlineup/:lineup_id',
  _lineupController['default'].editEventLineup
)
routes['delete'](
  '/deleteeventlineup/:lineup_id',
  _lineupController['default'].deleteEventLineup
)
/* event feedback and quetions */

routes.post(
  '/feedback/createfeedback/:event_id',
  _feedbackController['default'].createFeedback
)
routes.get(
  '/feedback/getfeedbacks/:event_id',
  _feedbackController['default'].getFeedback
)
routes.put(
  '/feedback/editfeedback/:feedback_id',
  _feedbackController['default'].editFeedback
)
routes['delete'](
  '/feedback/deletefeedback/:feedback_id',
  _feedbackController['default'].deleteFeedback
)
routes.post(
  '/questions/createquestions/:event_id',
  _feedbackController['default'].createQuestion
)
routes.get(
  '/feedback/getquestions/:event_id',
  _feedbackController['default'].getQuestions
)
routes.put(
  '/feedback/editquestion/:question_id',
  _feedbackController['default'].editQuestion
)
routes['delete'](
  '/feedback/deletequestion/:question_id',
  _feedbackController['default'].deleteQuestion
)
module.exports = routes
