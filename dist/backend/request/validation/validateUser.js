'use strict'

var _expressValidator = require('express-validator')

module.exports = {
  validateUser: function validateUser(method) {
    switch (method) {
      case 'createUser': {
        return [
          (0, _expressValidator.body)(
            'first_name',
            'first name field is required'
          ).exists(),
          (0, _expressValidator.body)(
            'last_name',
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

      case 'editUser': {
        return [
          (0, _expressValidator.body)(
            'first_name',
            'first name field is required'
          ).exists(),
          (0, _expressValidator.body)(
            'last_name',
            'last name field is required'
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
