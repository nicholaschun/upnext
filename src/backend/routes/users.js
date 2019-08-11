import express from 'express'
const routes = express.Router()

import userController from './../controllers/userController'
import {validateUser} from './../request/validation/validateUser'



routes.post('/register', validateUser('createUser'), userController.createUser)
routes.post('/login', validateUser('loginUser'), userController.loginUser)
routes.post('/verifyUpNextAccount', userController.verifyUser)
routes.post('/logoutUser', userController.logoutUser)
routes.post('/resetPassword',validateUser('resetPassword'), userController.resetPassword)
routes.post('/sendPasswordEmail', validateUser('sendPassEmail'), userController.sendPasswordEmail)

module.exports = routes