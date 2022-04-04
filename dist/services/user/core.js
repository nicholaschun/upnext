'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.createEditUser = exports.createAuthenticatedUser = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _models = require('../../utils/models')

var createAuthenticatedUser = function createAuthenticatedUser() {
  return /*#__PURE__*/ (function() {
    var _ref = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req) {
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt('return', {
                  data: req.user.user.data,
                  statusCode: 200
                })

              case 1:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function(_x) {
      return _ref.apply(this, arguments)
    }
  })()
}

exports.createAuthenticatedUser = createAuthenticatedUser

var createEditUser = function createEditUser(_ref2) {
  var updateRecord = _ref2.updateRecord,
    getRecord = _ref2.getRecord,
    models = _ref2.models
  return /*#__PURE__*/ (function() {
    var _ref3 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req) {
        var body, params, conditions, payload, result
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                ;(body = req.body), (params = req.params)
                conditions = {
                  user_id: params.user_id
                }
                payload = {
                  first_name: body.first_name,
                  last_name: body.last_name,
                  organization: body.organization,
                  full_name: ''
                    .concat(body.first_name, ' ')
                    .concat(body.last_name)
                }
                _context2.next = 5
                return updateRecord({
                  model: _models.userProfileModel,
                  conditions: conditions,
                  payload: payload
                })

              case 5:
                _context2.next = 7
                return getRecord({
                  model: _models.userProfileModel,
                  conditions: conditions
                })

              case 7:
                result = _context2.sent
                return _context2.abrupt('return', {
                  data: result,
                  statusCode: 200
                })

              case 9:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function(_x2) {
      return _ref3.apply(this, arguments)
    }
  })()
}

exports.createEditUser = createEditUser
