'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _googleAuthLibrary = require('google-auth-library')

var _dotenv = _interopRequireDefault(require('dotenv'))

_dotenv['default'].config()

var client = new _googleAuthLibrary.OAuth2Client(process.env.google_client_id)
module.exports = {
  verifyIdToken: function verifyIdToken(idToken) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var ticket, payload
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return client.verifyIdToken({
                  idToken: idToken,
                  audience: process.env.google_client_id
                })

              case 2:
                ticket = _context.sent
                payload = ticket.getPayload()
                return _context.abrupt('return', payload)

              case 5:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )()
  }
}
