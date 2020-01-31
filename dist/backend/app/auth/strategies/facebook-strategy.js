'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _passport = _interopRequireDefault(require('passport'))

var _passportFacebook = _interopRequireDefault(require('passport-facebook'))

var _user = require('../../../domains/user')

var _dotenv = require('dotenv')

_passport['default'].use(
  new _passportFacebook['default'].Strategy(
    {
      clientID: (0, _dotenv.config)().parsed.facebook_client_id,
      clientSecret: (0, _dotenv.config)().parsed.facebook_secret,
      callbackURL: (0, _dotenv.config)().parsed.facebook_callback,
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    /*#__PURE__*/
    (function() {
      var _ref = (0, _asyncToGenerator2['default'])(
        /*#__PURE__*/
        _regenerator['default'].mark(function _callee(
          accessToken,
          refreshToken,
          profile,
          done
        ) {
          var result,
            userBody,
            fullname,
            profile_image,
            userProfile,
            user,
            userP,
            userData,
            resultData
          return _regenerator['default'].wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2
                  return (0, _user.ifUserExists)(profile.emails[0].value)

                case 2:
                  result = _context.sent

                  if (result) {
                    _context.next = 19
                    break
                  }

                  userBody = {
                    sub_id: profile.id,
                    email: profile.emails[0].value,
                    password: profile.id,
                    loginProvider: 2,
                    status: 1,
                    verified: 1
                  }
                  fullname = profile.displayName.split(' ')
                  profile_image = profile.photos[0].value
                  userProfile = {
                    profile: {
                      firstName: fullname[0],
                      lastName: fullname[1],
                      profile: profile_image
                    }
                  }
                  _context.next = 10
                  return (0, _user.createUser)(userBody)

                case 10:
                  user = _context.sent
                  userProfile.id = user.id
                  _context.next = 14
                  return (0, _user.createUserProfile)(userProfile)

                case 14:
                  userP = _context.sent
                  userData = {
                    id: user.id,
                    email: user.email,
                    dp: userP.profile,
                    user: userP.first_name
                  }
                  return _context.abrupt('return', done(null, userData))

                case 19:
                  resultData = {
                    id: result.id,
                    email: result.email,
                    dp: result.UserProfile.profile,
                    user: result.UserProfile.first_name
                  }
                  return _context.abrupt('return', done(null, resultData))

                case 21:
                case 'end':
                  return _context.stop()
              }
            }
          }, _callee)
        })
      )

      return function(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments)
      }
    })()
  )
)
