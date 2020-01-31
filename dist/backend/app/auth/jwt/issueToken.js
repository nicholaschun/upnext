'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

var i = 'upnext'
var s = 'admin@up-next.co'
var a = 'up-next.co/apps'
var expire = '365d'

var publicKey = _fs['default']
  .readFileSync(_path['default'].resolve('./config/keys/public.key'))
  .toString('utf8')

var privateKey = _fs['default']
  .readFileSync(_path['default'].resolve('./config/keys/private.key'))
  .toString('utf8')

module.exports = {
  issueToken: function issueToken(body) {
    var payload = {
      data: body,
      expiresIn: expire
    }
    var signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: expire
    }

    var token = _jsonwebtoken['default'].sign(
      {
        user: payload
      },
      privateKey,
      signOptions
    )

    return token
  },
  generateRefreshToken: function generateRefreshToken(body) {}
}
