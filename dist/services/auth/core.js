'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.createWithLoginSocial = exports.createLogin = exports.createRegister = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = require('../../utils/index')

var _models = require('../../utils/models')

var _issueToken = require('./jwt/issueToken')

var createRegister = function createRegister(_ref) {
  var createRecord = _ref.createRecord,
    getRecord = _ref.getRecord,
    config = _ref.config
  return /*#__PURE__*/ (function() {
    var _ref2 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req) {
        var body,
          defaultProfileImage,
          conditions,
          user,
          userId,
          userPayload,
          data
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                body = req.body
                defaultProfileImage = config.defaultProfileImage
                conditions = {
                  email: body.email
                }
                _context.next = 5
                return getRecord({
                  model: _models.userModel,
                  conditions: conditions
                })

              case 5:
                user = _context.sent

                if (!user) {
                  _context.next = 8
                  break
                }

                return _context.abrupt('return', {
                  data: 'User already exists',
                  statusCode: 403
                })

              case 8:
                userId = (0, _index.genuuid)()
                userPayload = {
                  email: body.email,
                  password: (0, _index.encryptPass)(body.password),
                  first_name: body.first_name,
                  last_name: body.last_name,
                  profile: defaultProfileImage,
                  full_name: ''
                    .concat(body.first_name, ' ')
                    .concat(body.last_name),
                  organization: body.organization,
                  status: 1,
                  verified: 1,
                  sub_id: null,
                  loginProvider: 3,
                  user_id: userId,
                  verify_token: (0, _index.genToken)(body.password),
                  plan: 'free'
                } // create user profile

                _context.next = 12
                return createRecord({
                  model: _models.userProfileModel,
                  payload: userPayload
                })

              case 12:
                _context.next = 14
                return createRecord({
                  model: _models.userModel,
                  payload: userPayload
                })

              case 14:
                data = _context.sent
                _context.next = 17
                return createRecord({
                  model: _models.userSettingsModel,
                  payload: userPayload
                })

              case 17:
                return _context.abrupt('return', {
                  data: data,
                  statusCode: 201
                })

              case 18:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function(_x) {
      return _ref2.apply(this, arguments)
    }
  })()
}

exports.createRegister = createRegister

var createLogin = function createLogin(_ref3) {
  var getRecord = _ref3.getRecord,
    models = _ref3.models
  return /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req) {
        var _req$body,
          email,
          password,
          conditions,
          relations,
          user,
          isMatched,
          body,
          token,
          result

        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                ;(_req$body = req.body),
                  (email = _req$body.email),
                  (password = _req$body.password)
                conditions = {
                  email: email
                }
                relations = [
                  {
                    model: models.UserProfile
                  },
                  {
                    model: models.UserSettings
                  }
                ]
                _context2.next = 5
                return getRecord({
                  model: _models.userModel,
                  conditions: conditions,
                  relations: relations
                })

              case 5:
                user = _context2.sent

                if (user) {
                  _context2.next = 8
                  break
                }

                return _context2.abrupt('return', {
                  data: 'User does not exist',
                  statusCode: 403
                })

              case 8:
                if (!user.status) {
                  _context2.next = 20
                  break
                }

                _context2.next = 11
                return (0, _index.comparePassword)(password, user.password)

              case 11:
                isMatched = _context2.sent

                if (!isMatched) {
                  _context2.next = 19
                  break
                }

                body = {
                  user_id: user.user_id,
                  email: user.email,
                  first_name: user.UserProfile.first_name,
                  last_name: user.UserProfile.last_name,
                  organization: user.UserProfile.organization,
                  profile: user.UserProfile.profile,
                  status: user.status,
                  verified: user.verified,
                  user_settings: user.UserSetting
                }
                token = (0, _issueToken.issueToken)(body)
                result = {
                  token: token,
                  user: body
                }
                return _context2.abrupt('return', {
                  data: result,
                  statusCode: 200
                })

              case 19:
                return _context2.abrupt('return', {
                  data: 'Username / Password Incorrect',
                  statusCode: 403
                })

              case 20:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function(_x2) {
      return _ref4.apply(this, arguments)
    }
  })()
}

exports.createLogin = createLogin

var createWithLoginSocial = function createWithLoginSocial(_ref5) {
  var createRecord = _ref5.createRecord,
    getRecord = _ref5.getRecord,
    models = _ref5.models,
    config = _ref5.config
  return /*#__PURE__*/ (function() {
    var _ref6 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req) {
        var body,
          defaultProfileImage,
          conditions,
          relations,
          user,
          _body,
          _token,
          userId,
          userPayload,
          token

        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                body = req.body
                defaultProfileImage = config.defaultProfileImage
                conditions = {
                  email: body.email
                }
                relations = [
                  {
                    model: models.UserProfile
                  }
                ]
                _context3.next = 6
                return getRecord({
                  model: _models.userModel,
                  conditions: conditions,
                  relations: relations
                })

              case 6:
                user = _context3.sent

                if (!user) {
                  _context3.next = 11
                  break
                }

                _body = {
                  user_id: user.user_id,
                  email: user.email,
                  first_name: user.UserProfile.first_name,
                  last_name: user.UserProfile.last_name,
                  organization: user.UserProfile.organization,
                  profile: user.UserProfile.profile,
                  status: user.status,
                  verified: user.verified
                }
                _token = (0, _issueToken.issueToken)(_body)
                return _context3.abrupt('return', {
                  data: {
                    token: _token,
                    user: _body
                  },
                  statusCode: 200
                })

              case 11:
                userId = (0, _index.genuuid)()
                userPayload = {
                  email: body.email,
                  first_name: body.first_name,
                  last_name: body.last_name,
                  profile: defaultProfileImage,
                  full_name: ''
                    .concat(body.first_name, ' ')
                    .concat(body.last_name),
                  status: 1,
                  verified: 1,
                  sub_id: body.id,
                  loginProvider: 2,
                  user_id: userId,
                  plan: 'free'
                } // create user profile

                _context3.next = 15
                return createRecord({
                  model: _models.userProfileModel,
                  payload: userPayload
                })

              case 15:
                _context3.next = 17
                return createRecord({
                  model: _models.userModel,
                  payload: userPayload
                })

              case 17:
                _context3.next = 19
                return createRecord({
                  model: _models.userSettingsModel,
                  payload: userPayload
                })

              case 19:
                token = (0, _issueToken.issueToken)(userPayload)
                return _context3.abrupt('return', {
                  data: {
                    token: token,
                    user: userPayload
                  },
                  statusCode: 200
                })

              case 21:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )

    return function(_x3) {
      return _ref6.apply(this, arguments)
    }
  })()
}

exports.createWithLoginSocial = createWithLoginSocial
