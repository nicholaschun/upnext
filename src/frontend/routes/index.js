const express= require('express')
const routes = express.Router()
const siteController = require('./../controllers/dashboardController')
const dashboardController = require('./../controllers/guestPagesController')


routes.get('/', siteController.homePage)
routes.get('/changepassword', siteController.changePassPage)
routes.get('/register', siteController.signUpPage)
routes.get('/dashboard', dashboardController.dashboard)
routes.get('/dashboard/profile', dashboardController.profile)
routes.get('/dashboard/lineup', dashboardController.lineupPage)
routes.get('/dashboard/createevent', dashboardController.createEventPage)
routes.get('/dashboard/editevent', dashboardController.editEventPage)
routes.get('/dashboard/feedback', dashboardController.feedbackPage)
routes.get('/dashboard/questions', dashboardController.questionsPage)

module.exports = routes