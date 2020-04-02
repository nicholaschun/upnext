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
  }).single('event_image'),
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
// routes.put(
//   '/feedback/editfeedback/:feedback_id',
//   feedbackController.editFeedback
// )
// routes.delete(
//   '/feedback/deletefeedback/:feedback_id',
//   feedbackController.deleteFeedback
// )
// routes.get(
//   '/questions/getallquestions/:event_id/:day_id',
//   feedbackController.getQuestions
// )
// routes.put(
//   '/questions/editquestion/:question_id',
//   feedbackController.editQuestion
// )
// routes.delete(
//   '/questions/deletequestion/:question_id',
//   feedbackController.deleteQuestion
// )

routes.get(
  '/getlineupbyday/:event_id/:day_id',
  _eventController['default'].getLineupByDay
)
module.exports = routes
