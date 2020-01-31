'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _expressValidator = require('express-validator')

var _bcryptjs = _interopRequireDefault(require('bcryptjs'))

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
    _bcryptjs['default'].compare(password, userPassword, function(
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
