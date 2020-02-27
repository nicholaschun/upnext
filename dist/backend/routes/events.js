'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _multer = _interopRequireDefault(require('multer'))

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
  '/createevent', // validateEvent('createEvent'),
  (0, _multer['default'])({
    dest: 'temp/'
  }).single('event_image'),
  _eventController['default'].createEvent
)
routes.put(
  '/editevent/:event_id', // validateEvent('editEvent'),
  (0, _multer['default'])({
    dest: 'temp/'
  }).single('featured_image'),
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
routes.patch(
  '/unpublishevent/:event_id',
  _eventController['default'].unpublishEvent
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
  '/:event_id/editlineup/:day_id',
  _lineupController['default'].editEventLineup
)
routes['delete'](
  '/deleteeventlineup/:lineup_id',
  _lineupController['default'].deleteEventLineup
)
/* event feedback and quetions */

routes.post(
  '/feedback/createfeedback/:event_id/:day_id',
  (0, _validateEvent.validateEvent)('createFeedback'),
  _feedbackController['default'].createFeedback
)
routes.get(
  '/feedback/getallfeedback/:event_id/:day_id',
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
  '/questions/createquestions/:event_id/:day_id',
  (0, _validateEvent.validateEvent)('createQuestion'),
  _feedbackController['default'].createQuestion
)
routes.get(
  '/questions/getallquestions/:event_id/:day_id',
  _feedbackController['default'].getQuestions
)
routes.put(
  '/questions/editquestion/:question_id',
  _feedbackController['default'].editQuestion
)
routes['delete'](
  '/questions/deletequestion/:question_id',
  _feedbackController['default'].deleteQuestion
)
routes.get(
  '/getlineupbyday/:event_id/:day_id',
  _eventController['default'].getLineupByDay
)
module.exports = routes
