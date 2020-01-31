'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _express = _interopRequireDefault(require('express'))

var _bodyParser = _interopRequireDefault(require('body-parser'))

var _expressSession = _interopRequireDefault(require('express-session'))

var _passport = _interopRequireDefault(require('passport'))

var _dotenv = require('dotenv')

var _cors = _interopRequireDefault(require('cors'))

var _cookieParser = _interopRequireDefault(require('cookie-parser'))

var _users = _interopRequireDefault(require('./backend/routes/users'))

var _events = _interopRequireDefault(require('./backend/routes/events'))

var _providers = _interopRequireDefault(require('./backend/routes/providers'))

var _dashboard = _interopRequireDefault(require('./backend/routes/dashboard'))

var _guest = _interopRequireDefault(require('./backend/routes/guest'))

var _verifySession = _interopRequireDefault(
  require('./backend/app/auth/verifySession')
)

var app = (0, _express['default'])()
var configure = (0, _dotenv.config)()
var port = process.env.PORT || configure.parsed.default_port
var hostname = configure.parsed.default_host
app.use((0, _cors['default'])())
app.use((0, _cookieParser['default'])())
app.set('views', './frontend/views')
app.set('view engine', 'pug')
app.use(_bodyParser['default'].json())
app.use(_express['default']['static']('./frontend/public'))
app.use(
  (0, _expressSession['default'])({
    key: configure.parsed.session_key,
    secret: configure.parsed.secret_key,
    resave: false,
    expires: false,
    saveUninitialized: true
  })
)
app.use(_passport['default'].initialize())
app.use(_passport['default'].session())

require('./backend/app/auth/passport')(_passport['default'])
/* App routes */

app.use('/', _guest['default'])
app.use('/dashboard', _dashboard['default'])
app.use(''.concat(configure.parsed.api_base_url, '/users'), _users['default'])
app.use(''.concat(configure.parsed.api_base_url, '/events'), _events['default'])
app.use('/auth', _providers['default'])
/* Start express server */

app.listen(port, function() {
  console.log('Running on http://'.concat(hostname, ':').concat(port))
})
module.exports = app
