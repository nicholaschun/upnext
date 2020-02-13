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
  createUser: function createUser(req, res) {
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
                    res
                      .status(401)
                      .json(
                        'User already exists login to continue your session'
                      )
                  )

                case 7:
                  body = {
                    email: req.body.email,
                    password: req.body.password,
                    firstName: req.body.first_name,
                    lastName: req.body.last_name,
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
                    id: user.user_id,
                    profile: body
                  }
                  _context.next = 14
                  return (0, _user.createUserProfile)(data)

                case 14:
                  return _context.abrupt('return', res.json(user))

                case 17:
                  _context.prev = 17
                  _context.t0 = _context['catch'](0)
                  return _context.abrupt('return', res.json(_context.t0))

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
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0
                  ;(0, _validate.validate)(req, res)

                  _passport['default'].authenticate(
                    'local',
                    {
                      session: false
                    },
                    function(err, user, info) {
                      if (err || !user) {
                        return res.status(400).json(info.msg)
                      }

                      req.logIn(
                        user,
                        {
                          session: false
                        },
                        function(err) {
                          if (err) {
                            return res
                              .status(400)
                              .json('Something went wrong. Try again')
                          } //generate a signed token for the user

                          var body = {
                            user_id: user.user_id,
                            email: user.email,
                            first_name: user.UserProfile.first_name,
                            last_name: user.UserProfile.last_name,
                            organization: user.UserProfile.organization,
                            profile: user.UserProfile.profile,
                            status: user.status,
                            verified: user.verified
                          }
                          var token = (0, _issueToken.issueToken)(body)
                          return res.json({
                            token: token,
                            user: body
                          })
                        }
                      )
                    }
                  )(req, res, next)

                  _context2.next = 8
                  break

                case 5:
                  _context2.prev = 5
                  _context2.t0 = _context2['catch'](0)
                  return _context2.abrupt('return', res.json(_context2.t0))

                case 8:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[0, 5]]
        )
      })
    )()
  },
  authUser: function authUser(req, res) {
    res.json(req.user.user.data)
  },
  sendPasswordEmail: function sendPasswordEmail(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        var email
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0
                  ;(0, _validate.validate)(req, res)
                  res.json(req.body)
                  email = req.body.email
                  _context3.next = 10
                  break

                case 6:
                  _context3.prev = 6
                  _context3.t0 = _context3['catch'](0)
                  console.log(_context3.t0)
                  return _context3.abrupt('return', res.json(_context3.t0))

                case 10:
                case 'end':
                  return _context3.stop()
              }
            }
          },
          _callee3,
          null,
          [[0, 6]]
        )
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
  editUser: function editUser(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        var result
        return _regenerator['default'].wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0
                  ;(0, _validate.validate)(req, res)
                  _context4.next = 4
                  return (0, _user.editUserProfile)(
                    req.body,
                    req.params.user_id
                  )

                case 4:
                  result = _context4.sent
                  return _context4.abrupt('return', res.json(result))

                case 8:
                  _context4.prev = 8
                  _context4.t0 = _context4['catch'](0)
                  return _context4.abrupt(
                    'return',
                    res.status(500).json(_context4.t0)
                  )

                case 11:
                case 'end':
                  return _context4.stop()
              }
            }
          },
          _callee4,
          null,
          [[0, 8]]
        )
      })
    )()
  },
  logoutUser: function logoutUser(req, res) {
    req.logout()
    return res.redirect('/') // res.send('logout user')
  }
}
