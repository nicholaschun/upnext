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

routes.get(
  '/',
  /*#__PURE__*/ (function() {
    var _ref = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                handler = _dependency['default'].resolve('getAllEvents')
                _context.next = 3
                return handler()

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
routes.get(
  '/search/:field',
  /*#__PURE__*/ (function() {
    var _ref2 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                handler = _dependency['default'].resolve('searchEvent')
                _context2.next = 3
                return handler(req)

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
routes.get(
  '/user/:user_id',
  /*#__PURE__*/ (function() {
    var _ref3 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                handler = _dependency['default'].resolve('getUserEvents')
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
routes.get(
  '/:event_id',
  /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee4(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                handler = _dependency['default'].resolve('getOneEvent')
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
routes.post(
  '/',
  /*#__PURE__*/ (function() {
    var _ref5 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee5(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                handler = _dependency['default'].resolve('createEvent')
                _context5.next = 3
                return handler(req)

              case 3:
                resp = _context5.sent
                return _context5.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context5.stop()
            }
          }
        }, _callee5)
      })
    )

    return function(_x9, _x10) {
      return _ref5.apply(this, arguments)
    }
  })()
)
routes.patch(
  '/:event_id',
  /*#__PURE__*/ (function() {
    var _ref6 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee6(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                handler = _dependency['default'].resolve('editEvent')
                _context6.next = 3
                return handler(req)

              case 3:
                resp = _context6.sent
                return _context6.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context6.stop()
            }
          }
        }, _callee6)
      })
    )

    return function(_x11, _x12) {
      return _ref6.apply(this, arguments)
    }
  })()
)
routes['delete'](
  '/:event_id',
  /*#__PURE__*/ (function() {
    var _ref7 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee7(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                handler = _dependency['default'].resolve('deleteEvent')
                _context7.next = 3
                return handler(req)

              case 3:
                resp = _context7.sent
                return _context7.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context7.stop()
            }
          }
        }, _callee7)
      })
    )

    return function(_x13, _x14) {
      return _ref7.apply(this, arguments)
    }
  })()
)
routes.patch(
  '/day/:day_id',
  /*#__PURE__*/ (function() {
    var _ref8 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee8(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                handler = _dependency['default'].resolve('editEventDay')
                _context8.next = 3
                return handler(req)

              case 3:
                resp = _context8.sent
                return _context8.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context8.stop()
            }
          }
        }, _callee8)
      })
    )

    return function(_x15, _x16) {
      return _ref8.apply(this, arguments)
    }
  })()
)
routes['delete'](
  '/day/:day_id',
  /*#__PURE__*/ (function() {
    var _ref9 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee9(req, res) {
        var handler, resp
        return _regenerator['default'].wrap(function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                handler = _dependency['default'].resolve('deleteEventDay')
                _context9.next = 3
                return handler(req)

              case 3:
                resp = _context9.sent
                return _context9.abrupt(
                  'return',
                  (0, _utils.respondWithData)(resp, res)
                )

              case 5:
              case 'end':
                return _context9.stop()
            }
          }
        }, _callee9)
      })
    )

    return function(_x17, _x18) {
      return _ref9.apply(this, arguments)
    }
  })()
)
var _default = routes
exports['default'] = _default
