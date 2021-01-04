// import express from 'express'
// import passport from 'passport'
// import userController from '../controllers/userController'
// import { validateUser } from '../request/validation/validateUser'

// const routes = express.Router()

// routes.post(
//   '/login-token',
//   validateUser('loginUser'),
//   userController.tokenLogin
// )

// routes.get('/authuser', userController.authUser)

// routes.post(
//   '/resetPassword',
//   validateUser('resetPassword'),
//   userController.resetPassword
// )
// routes.post(
//   '/sendPasswordEmail',
//   validateUser('sendPassEmail'),
//   userController.sendPasswordEmail
// )

// routes.put(
//   '/edituser/:user_id',
//   validateUser('editUser'),
//   userController.editUser
// )

// // Protected routes
// routes.get(
//   '/test',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     res.send('okay woking')
//   }
// )

// export default routes
