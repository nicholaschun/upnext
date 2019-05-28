const express= require('express')
const routes = express.Router()
const eventsController = require('./../../backend/controllers/eventsController')
const authController = require('./../../backend/controllers/authController')
const siteController = require('./../../backend/controllers/siteController')
const userController = require('./../../backend/controllers/userController')


routes.get('/', siteController.homePage)
routes.get('/changepassword', siteController.changePassPage)
routes.get('/register', authController.signUpPage)
routes.get('/dashboard', userController.dashboard)
routes.get('/dashboard/profile', userController.profile)
routes.get('/dashboard/lineup', eventsController.lineupPage)
routes.get('/dashboard/createevent', eventsController.createEventPage)
routes.get('/dashboard/editevent', eventsController.editEventPage)
routes.get('/dashboard/feedback', eventsController.feedbackPage)
routes.get('/dashboard/questions', eventsController.questionsPage)

module.exports = routes