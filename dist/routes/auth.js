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

var _dependency = _interopRequireDefault(require('./../dependency'))

var _utils = require('./../utils')

var routes = _express['default'].Router()

routes.post(
  '/register',
  /*#__PURE__*/ (function() {
    var _ref = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                handler = _dependency['default'].resolve('register')
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
routes.post(
  '/login',
  /*#__PURE__*/ (function() {
    var _ref2 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                handler = _dependency['default'].resolve('login')
                _context2.next = 3
                return handler(req, res)

              case 3:
                resp = _context2.sent
                return _context2.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function(_x3, _x4) {
      return _ref2.apply(this, arguments)
    }
  })()
)
routes.post(
  '/loginwithgoogle',
  /*#__PURE__*/ (function() {
    var _ref3 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                handler = _dependency['default'].resolve('loginWithGoogle')
                _context3.next = 3
                return handler(req)

              case 3:
                resp = _context3.sent
                return _context3.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )

    return function(_x5, _x6) {
      return _ref3.apply(this, arguments)
    }
  })()
)
routes.post(
  '/loginwithfacebook',
  /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                handler = _dependency['default'].resolve('loginWithFacebook')
                _context4.next = 3
                return handler(req)

              case 3:
                resp = _context4.sent
                return _context4.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context4.stop()
            }
          }
        }, _callee4)
      })
    )

    return function(_x7, _x8) {
      return _ref4.apply(this, arguments)
    }
  })()
)
var _default = routes
exports['default'] = _default
