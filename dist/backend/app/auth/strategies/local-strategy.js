'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _passport = _interopRequireDefault(require('passport'))

var _bcryptjs = _interopRequireDefault(require('bcryptjs'))

var _passportLocal = _interopRequireDefault(require('passport-local'))

var _user = require('../../../domains/user')

_passport['default'].use(
  new _passportLocal['default'].Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    /*#__PURE__*/
    (function() {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/
        _regenerator['default'].mark(function _callee(email, password, done) {
          var user
          return _regenerator['default'].wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2
                  return (0, _user.ifUserExists)(email)

                case 2:
                  user = _context.sent

                  if (user) {
                    _context.next = 5
                    break
                  }

                  return _context.abrupt(
                    'return',
                    done(null, false, {
                      msg: 'User does not exist'
                    })
                  )

                case 5:
                  if (!user.status) {
                    _context.next = 9
                    break
                  }

                  _bcryptjs['default'].compare(
                    password,
                    user.password,
                    function(err, isMatched) {
                      if (err) throw err

                      if (isMatched) {
                        return done(null, user)
                      } else {
                        return done(null, false, {
                          msg: 'Username / Password incorrect'
                        })
                      }
                    }
                  )

                  _context.next = 10
                  break

                case 9:
                  return _context.abrupt(
                    'return',
                    done(null, false, {
                      msg: 'Please verify your aacount to continue your session'
                    })
                  )

                case 10:
                case 'end':
                  return _context.stop()
              }
            }
          }, _callee)
        })
      )

      return function(_x, _x2, _x3) {
        return _ref.apply(this, arguments)
      }
    })()
  )
)
