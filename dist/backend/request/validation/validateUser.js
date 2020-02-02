'use strict'

var _expressValidator = require('express-validator')

module.exports = {
  validateUser: function validateUser(method) {
    switch (method) {
      case 'createUser': {
        return [
          (0, _expressValidator.body)(
            'firstname',
            'first name field is required'
          ).exists(),
          (0, _expressValidator.body)(
            'lastname',
            'last name field is required'
          ).exists(),
          (0, _expressValidator.body)('email', 'invalid email')
            .exists()
            .isEmail(),
          (0, _expressValidator.body)(
            'password',
            'password field is required'
          ).exists(),
          (0, _expressValidator.body)('organization').optional()
        ]
      }

      case 'loginUser': {
        return [
          (0, _expressValidator.body)('email', 'invalid email')
            .exists()
            .isEmail(),
          (0, _expressValidator.body)(
            'password',
            'password field is required'
          ).exists()
        ]
      }

      case 'sendPassEmail': {
        return [
          (0, _expressValidator.body)('email', 'invalid email')
            .exists()
            .isEmail()
        ]
      }

      case 'resetPassword': {
        return [
          (0, _expressValidator.body)(
            'newPassword',
            'password field is required'
          ).exists()
        ]
      }
    }
  }
}