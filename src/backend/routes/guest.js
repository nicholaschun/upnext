import express from 'express'

import guestController from './../controllers/guestController'
import eventController from './../controllers/eventController'

const routes = express.Router()

routes.get('/', guestController.homePage)
routes.get('/register', guestController.signUpPage)
routes.get('/resetpassword', guestController.resetPassPage)
routes.get('/geteventbysnippet/:snippet', eventController.getEventbySnippet)

module.exports = routes
