/* implements validation for events
 required fields include

 event_name

*/

import { body } from 'express-validator'

module.exports = {
  validateEvent(method) {
    switch (method) {
      case 'createEvent': {
        return [
          body('event_name', 'event name is required').exists(),
          body('user_id', 'user id is required').exists()
        ]
      }
      case 'editEvent': {
        return [body('event_name', 'event name is required').exists()]
      }
      case 'createFeedback': {
        return [body('feedback', 'feedback is required').exists()]
      }
      case 'createQuestion': {
        return [
          body('question', 'question is required').exists(),
          body('name', 'name is required').exists()
        ]
      }
    }
  }
}
