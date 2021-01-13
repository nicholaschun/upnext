'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _passport = _interopRequireDefault(require('passport'))

var _passportJwt = _interopRequireDefault(require('passport-jwt'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

var _config = _interopRequireDefault(require('../../../../config'))

var privateKey = _fs['default']
  .readFileSync(_path['default'].resolve('./config/keys/private.key'))
  .toString('utf8')

var ExtractJwt = _passportJwt['default'].ExtractJwt
var _config$auth = _config['default'].auth,
  jwtIssuer = _config$auth.jwtIssuer,
  jwtAudience = _config$auth.jwtAudience,
  jwtExpiresIn = _config$auth.jwtExpiresIn,
  jwtSubject = _config$auth.jwtSubject
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: privateKey,
  issuer: jwtIssuer,
  audience: jwtAudience,
  expiresIn: jwtExpiresIn,
  subject: jwtSubject
}

var _default = function _default() {
  _passport['default'].use(
    new _passportJwt['default'].Strategy(opts, function(jwtPayload, done) {
      if (jwtPayload) {
        return done(null, jwtPayload)
      } else {
        return done(null, false, {
          message: 'You are not authorized to access this resource'
        })
      }
    })
  )
}

exports['default'] = _default
