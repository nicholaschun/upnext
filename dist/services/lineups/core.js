'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.createSaveLineup = exports.createGetLineup = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _awaiting = require('awaiting')

var _index = require('../../utils/index')

var _models = require('../../utils/models')

var createGetLineup = function createGetLineup(_ref) {
  var listRecord = _ref.listRecord
  return /*#__PURE__*/ (function() {
    var _ref2 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(req) {
        var params, conditions, data
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                params = req.params
                conditions = {
                  day_id: params.day_id
                }
                _context.next = 4
                return listRecord({
                  model: _models.lineupModel,
                  conditions: conditions
                })

              case 4:
                data = _context.sent
                return _context.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 6:
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

exports.createGetLineup = createGetLineup

var createSaveLineup = function createSaveLineup(_ref3) {
  var createRecord = _ref3.createRecord,
    deleteRecord = _ref3.deleteRecord
  return /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req) {
        var lineups, params, conditions
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                ;(lineups = req.body), (params = req.params)
                conditions = {
                  day_id: params.day_id,
                  event_id: params.event_id
                }
                _context3.next = 4
                return deleteRecord({
                  model: _models.lineupModel,
                  conditions: conditions
                })

              case 4:
                _context3.next = 6
                return (0, _awaiting.map)(
                  lineups,
                  lineups.length,
                  /*#__PURE__*/ (function() {
                    var _ref5 = (0, _asyncToGenerator2['default'])(
                      /*#__PURE__*/ _regenerator['default'].mark(
                        function _callee2(lineup) {
                          var lineupPayload
                          return _regenerator['default'].wrap(
                            function _callee2$(_context2) {
                              while (1) {
                                switch ((_context2.prev = _context2.next)) {
                                  case 0:
                                    lineupPayload = {
                                      event_id: params.event_id,
                                      day_id: params.day_id,
                                      lineup_id: (0, _index.genuuid)(),
                                      start_time: lineup.start_time,
                                      end_time: lineup.end_time,
                                      duration: lineup.duration,
                                      activity: lineup.activity,
                                      description: lineup.description,
                                      duration_as_milli:
                                        lineup.duration_as_milli,
                                      facilitator: lineup.facilitator
                                    }
                                    _context2.next = 3
                                    return createRecord({
                                      model: _models.lineupModel,
                                      payload: lineupPayload
                                    })

                                  case 3:
                                  case 'end':
                                    return _context2.stop()
                                }
                              }
                            },
                            _callee2
                          )
                        }
                      )
                    )

                    return function(_x3) {
                      return _ref5.apply(this, arguments)
                    }
                  })()
                )

              case 6:
                return _context3.abrupt('return', {
                  data: lineups,
                  statusCode: 201
                })

              case 7:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )

    return function(_x2) {
      return _ref4.apply(this, arguments)
    }
  })()
}

exports.createSaveLineup = createSaveLineup
