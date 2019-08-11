import express from 'express'

import  guestController from './../controllers/guestPagesController'
import dashboardController from './../controllers/dashboardController'

const routes = express.Router()



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