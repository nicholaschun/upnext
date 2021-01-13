'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.generateRefreshToken = exports.issueToken = void 0

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

var _config = _interopRequireDefault(require('../../../../config'))

var _config$auth = _config['default'].auth,
  jwtIssuer = _config$auth.jwtIssuer,
  jwtAudience = _config$auth.jwtAudience,
  jwtExpiresIn = _config$auth.jwtExpiresIn,
  jwtSubject = _config$auth.jwtSubject

var privateKey = _fs['default']
  .readFileSync(_path['default'].resolve('./config/keys/private.key'))
  .toString('utf8')

var issueToken = function issueToken(body) {
  var payload = {
    data: body,
    expiresIn: jwtExpiresIn
  }
  var signOptions = {
    issuer: jwtIssuer,
    subject: jwtSubject,
    audience: jwtAudience,
    expiresIn: jwtExpiresIn
  }

  var token = _jsonwebtoken['default'].sign(
    {
      user: payload
    },
    privateKey,
    signOptions
  )

  return token
}

exports.issueToken = issueToken

var generateRefreshToken = function generateRefreshToken(body) {
  // TODO
}

exports.generateRefreshToken = generateRefreshToken
