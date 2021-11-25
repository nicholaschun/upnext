'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _express = _interopRequireDefault(require('express'))

var _cors = _interopRequireDefault(require('cors'))

var _bodyParser = _interopRequireDefault(require('body-parser'))

var _expressSession = _interopRequireDefault(require('express-session'))

var _passport = _interopRequireDefault(require('passport'))

var _routes = _interopRequireDefault(require('./routes'))

var _config = _interopRequireDefault(require('./config'))

// import passportConfig from './services/auth'
var port = _config['default'].port,
  host = _config['default'].host,
  auth = _config['default'].auth
var sessionSecret = auth.sessionSecret,
  sessionKey = auth.sessionKey
var app = (0, _express['default'])()
var defaultPort = port || 4000
var defaultHostname = host || 'http://localhost'
app.use(
  (0, _expressSession['default'])({
    key: sessionKey,
    secret: sessionSecret,
    resave: false,
    expires: false,
    saveUninitialized: true
  })
)
app.use((0, _cors['default'])())
app.use(_bodyParser['default'].json())
app.use(_passport['default'].initialize()) // passportConfig(passport)

app.use(_routes['default'])
app.listen(port, function() {
  console.log('Running on '.concat(defaultHostname, ':').concat(defaultPort))
})
var _default = app
exports['default'] = _default
