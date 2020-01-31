'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _crypto = _interopRequireDefault(require('crypto'))

var _bcrypt = _interopRequireDefault(require('bcrypt'))

var _uuid = _interopRequireDefault(require('uuid'))

module.exports = {
  genToken: function genToken(val) {
    return _crypto['default']
      .createHash('sha256')
      .update(val)
      .digest('hex')
  },
  encryptPass: function encryptPass(password) {
    return _bcrypt['default'].hashSync(password, 10)
  },
  genuuid: function genuuid() {
    return (0, _uuid['default'])()
  }
}
