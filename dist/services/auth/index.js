'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _index = require('../../db/models/index')

var _jwtStrategy = _interopRequireDefault(require('./strategies/jwt-strategy'))

var _default = function _default(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })
  passport.deserializeUser(function(user, done) {
    _index.User.findOne(
      {
        id: user.id
      },
      function(user) {
        done(null, user)
      }
    )
  })
  ;(0, _jwtStrategy['default'])()
}

exports['default'] = _default
