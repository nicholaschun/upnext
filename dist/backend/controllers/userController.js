'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _passport = _interopRequireDefault(require('passport'))

var _validate = require('./../utils/validate')

var _user = require('../domains/user')

var _issueToken = require('./../app/auth/jwt/issueToken')

module.exports = {
  createUser: function createUser(req, res, next) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var check, body, user, data
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  ;(0, _validate.validate)(req, res)
                  _context.next = 4
                  return (0, _user.ifUserExists)(req.body.email)

                case 4:
                  check = _context.sent

                  if (!check) {
                    _context.next = 7
                    break
                  }

                  return _context.abrupt(
                    'return',
                    res.status(401).json({
                      msg: 'User already exists login to continue your session'
                    })
                  )

                case 7:
                  body = {
                    email: req.body.email,
                    password: req.body.password,
                    firstName: req.body.firstname,
                    lastName: req.body.lastname,
                    organization: req.body.organization,
                    profile: '',
                    status: 0,
                    verified: 0,
                    loginProvider: 3
                  }
                  _context.next = 10
                  return (0, _user.createUser)(body)

                case 10:
                  user = _context.sent
                  data = {
                    id: user.id,
                    profile: body
                  }
                  _context.next = 14
                  return (0, _user.createUserProfile)(data)

                case 14:
                  return _context.abrupt(
                    'return',
                    res.json({
                      data: user,
                      msg:
                        'Account created succusfully. Check your email to verify your account'
                    })
                  )

                case 17:
                  _context.prev = 17
                  _context.t0 = _context['catch'](0)
                  console.log(_context.t0)

                case 20:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 17]]
        )
      })
    )()
  },
  loginUser: function loginUser(req, res, next) {
    try {
      ;(0, _validate.validate)(req, res)

      _passport['default'].authenticate('local', function(err, user, info) {
        if (err || !user) {
          return res.status(400).send(info)
        } // const userBody = { id: user.id, email: user.email }

        req.logIn(user, function(err) {
          // res.send('logged in')
          console.log(req.user)
          res.json(req.user)
        })
      })(req, res, next)
    } catch (error) {
      console.log(error)
    }
  },
  tokenLogin: function tokenLogin(req, res, next) {
    _passport['default'].authenticate(
      'local',
      {
        session: false
      },
      function(err, user, info) {
        if (err || !user) {
          return res.status(400).json({
            message: info.message
          })
        }

        req.logIn(
          user,
          {
            session: false
          },
          function(err) {
            if (err) {
              return res.status(400).json({
                message: 'Something went wrong. Try again'
              })
            } //generate a signed token for the user

            var body = {
              iq: user.id,
              ie: user.email
            }
            var token = (0, _issueToken.issueToken)(body)
            return res.json({
              token: token
            })
          }
        )
      }
    )(req, res, next)
  },
  sendPasswordEmail: function sendPasswordEmail(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        var email
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                try {
                  ;(0, _validate.validate)(req, res)
                  res.json(req.body)
                  email = req.body.email
                } catch (error) {
                  console.log(error)
                }

              case 1:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )()
  },
  resetPassword: function resetPassword(req, res) {
    try {
      ;(0, _validate.validate)(req, res)
      res.json(req.body)
      var _req$body = req.body,
        token = _req$body.token,
        newPassword = _req$body.newPassword,
        confirmPassword = _req$body.confirmPassword
    } catch (error) {
      console.log(error)
    }
  },
  logoutUser: function logoutUser(req, res) {
    req.logout()
    return res.redirect('/') // res.send('logout user')
  }
}
