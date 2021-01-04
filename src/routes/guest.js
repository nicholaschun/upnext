// import express from 'express'

// import guestController from './../controllers/guestController'
// import eventController from './../controllers/eventController'
// import feedbackController from './../controllers/feedbackController'
// import { validateEvent } from '../request/validation/validateEvent'

// const routes = express.Router()

// routes.get('/', guestController.homePage)
// routes.get('/register', guestController.signUpPage)
// routes.get('/resetpassword', guestController.resetPassPage)
// routes.get('/geteventbysnippet/:snippet', eventController.getEventbySnippet)
// routes.get(
//   '/getuserlineupbyday/:event_id/:day_id',
//   eventController.getLineupByDay
// )
// routes.post(
//   '/sendfeedback',
//   validateEvent('createFeedback'),
//   feedbackController.sendFeedback
// )
// routes.post(
//   '/sendquestion',
//   validateEvent('createQuestion'),
//   feedbackController.sendQuestion
// )

// module.exports = routes
