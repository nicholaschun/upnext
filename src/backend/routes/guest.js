import express from 'express'

import guestController from './../controllers/guestController'

const routes = express.Router()

routes.get('/', guestController.homePage)
routes.get('/register', guestController.signUpPage)
routes.get('/resetpassword', guestController.resetPassPage)

module.exports = routes
