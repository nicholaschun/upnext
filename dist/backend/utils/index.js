'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _crypto = _interopRequireDefault(require('crypto'))

var _bcryptjs = _interopRequireDefault(require('bcryptjs'))

var _uuid = _interopRequireDefault(require('uuid'))

module.exports = {
  genToken: function genToken(val) {
    return _crypto['default']
      .createHash('sha256')
      .update(val)
      .digest('hex')
  },
  encryptPass: function encryptPass(password) {
    return _bcryptjs['default'].hashSync(password, 10)
  },
  genuuid: function genuuid() {
    return (0, _uuid['default'])()
  },
  generateEventLink: function generateEventLink(snippet) {
    var lower = snippet.toLowerCase()
    return lower.split(' ').join('-')
  }
}
