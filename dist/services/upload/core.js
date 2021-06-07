'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _path = _interopRequireDefault(require('path'))

var _default = function _default(_ref) {
  var putToS3 = _ref.putToS3
  return /*#__PURE__*/ (function() {
    var _ref2 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req) {
        var file, type, key, _yield$putToS, Location

        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                ;(file = req.file), (type = req.body.type)
                console.log(type)

                if (!file) {
                  _context.next = 9
                  break
                }

                key = ''
                  .concat(type, '/')
                  .concat(Date.now().toString())
                  .concat(_path['default'].extname(file.originalname))
                _context.next = 6
                return putToS3({
                  key: key,
                  file: file
                })

              case 6:
                _yield$putToS = _context.sent
                Location = _yield$putToS.Location
                return _context.abrupt('return', {
                  data: Location,
                  statusCode: 200
                })

              case 9:
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

exports['default'] = _default
