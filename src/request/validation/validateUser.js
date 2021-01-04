import { body } from 'express-validator'

module.exports = {
  validateUser(method) {
    switch (method) {
      case 'createUser': {
        return [
          body('first_name', 'first name field is required').exists(),
          body('last_name', 'last name field is required').exists(),
          body('email', 'invalid email')
            .exists()
            .isEmail(),
          body('password', 'password field is required').exists(),
          body('organization').optional()
        ]
      }
      case 'editUser': {
        return [
          body('first_name', 'first name field is required').exists(),
          body('last_name', 'last name field is required').exists(),
          body('organization').optional()
        ]
      }
      case 'loginUser': {
        return [
          body('email', 'invalid email')
            .exists()
            .isEmail(),
          body('password', 'password field is required').exists()
        ]
      }
      case 'sendPassEmail': {
        return [
          body('email', 'invalid email')
            .exists()
            .isEmail()
        ]
      }
      case 'resetPassword': {
        return [body('newPassword', 'password field is required').exists()]
      }
    }
  }
}
