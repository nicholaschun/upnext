'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _expressValidator = require('express-validator')

var _bcrypt = _interopRequireDefault(require('bcrypt'))

module.exports = {
  validate: function validate(req, res) {
    var errors = (0, _expressValidator.validationResult)(req)

    if (!errors.isEmpty()) {
      res.status(422).json({
        errors: errors.array()
      })
    }
  },
  checkPass: function checkPass(password, userPassword) {
    _bcrypt['default'].compare(password, userPassword, function(
      err,
      isMatched
    ) {
      if (err) throw err

      if (isMatched) {
        return true
      } else {
        return false
      }
    })
  }
}
