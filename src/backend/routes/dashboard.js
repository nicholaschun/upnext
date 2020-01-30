import express from 'express'

import dashboardController from './../controllers/dashboardController'

const routes = express.Router()

routes.get('/', dashboardController.dashboard)
routes.get('/profile', dashboardController.profile)
routes.get('/lineup', dashboardController.lineupPage)
routes.get('/createevent', dashboardController.createEventPage)
routes.get('/editevent', dashboardController.editEventPage)
routes.get('/feedback', dashboardController.feedbackPage)
routes.get('/questions', dashboardController.questionsPage)
routes.get('/changepassword', dashboardController.changePassPage)
routes.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = routes
