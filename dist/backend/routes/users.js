'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _passport = _interopRequireDefault(require('passport'))

var _userController = _interopRequireDefault(
  require('../controllers/userController')
)

var _validateUser = require('../request/validation/validateUser')

var routes = _express['default'].Router()

routes.post(
  '/register',
  (0, _validateUser.validateUser)('createUser'),
  _userController['default'].createUser
)
routes.post(
  '/login',
  (0, _validateUser.validateUser)('loginUser'),
  _userController['default'].loginUser
)
routes.post(
  '/login-token',
  (0, _validateUser.validateUser)('loginUser'),
  _userController['default'].tokenLogin
)
routes.get('/authuser', _userController['default'].authUser)
routes.post(
  '/resetPassword',
  (0, _validateUser.validateUser)('resetPassword'),
  _userController['default'].resetPassword
)
routes.post(
  '/sendPasswordEmail',
  (0, _validateUser.validateUser)('sendPassEmail'),
  _userController['default'].sendPasswordEmail
)
routes.put(
  '/edituser/:user_id',
  (0, _validateUser.validateUser)('editUser'),
  _userController['default'].editUser
) // Protected routes

routes.get(
  '/test',
  _passport['default'].authenticate('jwt', {
    session: false
  }),
  function(req, res) {
    res.send('okay woking')
  }
)
module.exports = routes
