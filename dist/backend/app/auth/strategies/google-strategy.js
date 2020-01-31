'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _passport = _interopRequireDefault(require('passport'))

var _passportGoogleOauth = _interopRequireDefault(
  require('passport-google-oauth20')
)

var _user = require('../../../domains/user')

var _dotenv = _interopRequireDefault(require('dotenv'))

_dotenv['default'].config()

_passport['default'].use(
  new _passportGoogleOauth['default'].Strategy(
    {
      clientID: process.env.google_client_id,
      clientSecret: process.env.google_secret,
      callbackURL: process.env.google_callback
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
                    _context.next = 18
                    break
                  }

                  userBody = {
                    sub_id: profile.id,
                    email: profile.emails[0].value,
                    password: profile.id,
                    loginProvider: 1,
                    status: 1,
                    verified: 1
                  }
                  profile_image = profile.photos[0].value
                  userProfile = {
                    profile: {
                      firstName: profile.name.givenName,
                      lastName: profile.name.familyName,
                      profile: profile_image
                    }
                  }
                  _context.next = 9
                  return (0, _user.createUser)(userBody)

                case 9:
                  user = _context.sent
                  userProfile.id = user.id
                  _context.next = 13
                  return (0, _user.createUserProfile)(userProfile)

                case 13:
                  userP = _context.sent
                  userData = {
                    id: user.id,
                    email: user.email,
                    dp: userP.profile,
                    user: userP.first_name
                  }
                  return _context.abrupt('return', done(null, userData))

                case 18:
                  resultData = {
                    id: result.id,
                    email: result.email,
                    dp: result.UserProfile.profile,
                    user: result.UserProfile.first_name
                  }
                  return _context.abrupt('return', done(null, resultData))

                case 20:
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
