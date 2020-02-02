'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _guestController = _interopRequireDefault(
  require('./../controllers/guestController')
)

var routes = _express['default'].Router()

routes.get('/', _guestController['default'].homePage)
routes.get('/register', _guestController['default'].signUpPage)
routes.get('/resetpassword', _guestController['default'].resetPassPage)
module.exports = routes