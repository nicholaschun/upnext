/* implements validation for events
 required fields include

 event_name

*/

import { body } from 'express-validator'

module.exports = {
  validateEvent(method) {
    switch (method) {
      case 'createEvent': {
        return [body('eventName', 'event name is required').exists()]
      }
      case 'editEvent': {
        return [body('eventName', 'event name is required').exists()]
      }
    }
  }
}
