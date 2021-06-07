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

var _express = _interopRequireDefault(require('express'))

var _multer = _interopRequireDefault(require('multer'))

var _dependency = _interopRequireDefault(require('./../dependency'))

var _utils = require('./../utils')

var routes = _express['default'].Router()

routes.post(
  '/',
  (0, _multer['default'])({
    dest: 'temp/'
  }).single('file'),
  /*#__PURE__*/ (function() {
    var _ref = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                handler = _dependency['default'].resolve('uploadFile')
                _context.next = 3
                return handler(req, res)

              case 3:
                resp = _context.sent
                return _context.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function(_x, _x2) {
      return _ref.apply(this, arguments)
    }
  })()
)
var _default = routes
exports['default'] = _default
