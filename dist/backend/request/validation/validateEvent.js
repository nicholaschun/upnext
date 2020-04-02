'use strict'

var _expressValidator = require('express-validator')

/* implements validation for events
 required fields include

 event_name

*/
module.exports = {
  validateEvent: function validateEvent(method) {
    switch (method) {
      case 'createEvent': {
        return [
          (0, _expressValidator.body)(
            'event_name',
            'event name is required'
          ).exists(),
          (0, _expressValidator.body)('user_id', 'user id is required').exists()
        ]
      }

      case 'editEvent': {
        return [
          (0, _expressValidator.body)(
            'event_name',
            'event name is required'
          ).exists()
        ]
      }

      case 'createFeedback': {
        return [
          (0, _expressValidator.body)(
            'feedback',
            'feedback is required'
          ).exists()
        ]
      }

      case 'createQuestion': {
        return [
          (0, _expressValidator.body)(
            'question',
            'question is required'
          ).exists(),
          (0, _expressValidator.body)('name', 'name is required').exists()
        ]
      }
    }
  }
}
