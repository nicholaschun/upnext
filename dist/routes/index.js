'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _express = _interopRequireDefault(require('express'))

var _passport = _interopRequireDefault(require('passport'))

var _config = _interopRequireDefault(require('../config'))

var _events = _interopRequireDefault(require('./events'))

var _lineups = _interopRequireDefault(require('./lineups'))

var _users = _interopRequireDefault(require('./users'))

var _auth = _interopRequireDefault(require('./auth'))

var baseUrl = _config['default'].baseUrl

var router = _express['default'].Router()

router.use(
  ''.concat(baseUrl, '/events'),
  _passport['default'].authenticate('jwt', {
    session: false
  }),
  _events['default']
)
router.use(
  ''.concat(baseUrl, '/events/lineups'),
  _passport['default'].authenticate('jwt', {
    session: false
  }),
  _lineups['default']
)
router.use(
  ''.concat(baseUrl, '/users'),
  _passport['default'].authenticate('jwt', {
    session: false
  }),
  _users['default']
)
router.use(''.concat(baseUrl, '/auth'), _auth['default'])
var _default = router
exports['default'] = _default
