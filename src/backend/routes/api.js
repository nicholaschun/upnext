import express from 'express'
import passport from 'passport'

const routes = express.Router()

import userController from '../controllers/userController'
import {validateUser} from '../request/validation/validateUser'


routes.post('/register', validateUser('createUser'), userController.createUser)
routes.post('/login', validateUser('loginUser'), userController.loginUser)
routes.post('/login-token', validateUser('loginUser'), userController.tokenLogin)
routes.post('/logoutUser', userController.logoutUser)
routes.post('/resetPassword',validateUser('resetPassword'), userController.resetPassword)
routes.post('/sendPasswordEmail', validateUser('sendPassEmail'), userController.sendPasswordEmail)

//Protected routes
routes.get('/test', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.send('okay woking')
})

module.exports = routes