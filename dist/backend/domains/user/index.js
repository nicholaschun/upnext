'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

var _index2 = _interopRequireDefault(require('../../utils/index'))

module.exports = {
  createUser: function createUser(body) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var verifyToken
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                console.log(body)
                verifyToken = _index2['default'].genToken(body.email)
                _context.next = 4
                return _index['default'].User.create({
                  email: body.email,
                  status: body.status,
                  verified: body.verified,
                  verify_token: verifyToken,
                  login_provider: body.loginProvider,
                  password: _index2['default'].encryptPass(body.password),
                  sub_id: body.sub_id,
                  user_id: _index2['default'].genuuid()
                })

              case 4:
                return _context.abrupt('return', _context.sent)

              case 5:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )()
  },
  createUserProfile: function createUserProfile(body) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return _index['default'].UserProfile.create({
                  user_id: body.id,
                  first_name: body.profile.firstName,
                  last_name: body.profile.lastName,
                  full_name: ''
                    .concat(body.profile.firstName, ' ')
                    .concat(body.profile.lastName),
                  organization: body.profile.organization,
                  profile: body.profile.profile
                })

              case 2:
                return _context2.abrupt('return', _context2.sent)

              case 3:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )()
  },
  ifUserExists: function ifUserExists(email) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.next = 2
                return _index['default'].User.findOne({
                  where: {
                    email: email
                  },
                  include: [
                    {
                      model: _index['default'].UserProfile
                    }
                  ]
                })

              case 2:
                return _context3.abrupt('return', _context3.sent)

              case 3:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )()
  }
}