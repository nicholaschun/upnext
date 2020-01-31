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
            'eventName',
            'event name is required'
          ).exists()
        ]
      }

      case 'editEvent': {
        return [
          (0, _expressValidator.body)(
            'eventName',
            'event name is required'
          ).exists()
        ]
      }
    }
  }
}
