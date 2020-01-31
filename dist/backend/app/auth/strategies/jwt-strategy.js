'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _passport = _interopRequireDefault(require('passport'))

var _passportJwt = _interopRequireDefault(require('passport-jwt'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

var privateKey = _fs['default']
  .readFileSync(_path['default'].resolve('./config/keys/private.key'))
  .toString('utf8')

var ExtractJwt = _passportJwt['default'].ExtractJwt
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = privateKey
opts.issuer = 'upnext'
opts.audience = 'up-next.co/apps'
opts.expiresIn = '365d'
opts.subject = 'admin@up-next.co'

_passport['default'].use(
  new _passportJwt['default'].Strategy(opts, function(jwtPayload, done) {
    console.log(jwtPayload)

    if (jwtPayload) {
      return done(null, jwtPayload)
    } else {
      return done(null, false, {
        message: 'You are not authorized to access this resource'
      })
    }
  })
)
