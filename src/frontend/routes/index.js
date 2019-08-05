const express= require('express')
const routes = express.Router()
const guestController = require('./../controllers/guestPagesController')
const dashboardController = require('./../controllers/dashboardController')


routes.get('/', guestController.homePage)
routes.get('/register', guestController.signUpPage)
routes.get('/resetpassword', guestController.resetPassPage)
routes.get('/dashboard', dashboardController.dashboard)
routes.get('/dashboard/profile', dashboardController.profile)
routes.get('/dashboard/lineup', dashboardController.lineupPage)
routes.get('/dashboard/createevent', dashboardController.createEventPage)
routes.get('/dashboard/editevent', dashboardController.editEventPage)
routes.get('/dashboard/feedback', dashboardController.feedbackPage)
routes.get('/dashboard/questions', dashboardController.questionsPage)
routes.get('/dashboard/changepassword', dashboardController.changePassPage)


module.exports = routes