'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _lineup = require('../domains/event/lineup')

var _index = require('../domains/event/index')

module.exports = {
  createLineup: function createLineup(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var event
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return (0, _index.getEventById)(req.params.event_id)

                case 3:
                  event = _context.sent

                  if (event) {
                    _context.next = 6
                    break
                  }

                  return _context.abrupt(
                    'return',
                    res.status(401).json('Event with the provided id not found')
                  )

                case 6:
                  _context.next = 8
                  return (0, _lineup.createLineup)(
                    req.body,
                    req.params.event_id
                  )

                case 8:
                  return _context.abrupt('return', res.status(200).json(true))

                case 11:
                  _context.prev = 11
                  _context.t0 = _context['catch'](0)
                  res.status(500).json({
                    message: _context.t0.message || 'Something went wrong'
                  })

                case 14:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 11]]
        )
      })
    )()
  },
  getEventLineup: function getEventLineup(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        var event
        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0
                  _context2.next = 3
                  return (0, _index.getEventById)(req.params.event_id)

                case 3:
                  event = _context2.sent
                  return _context2.abrupt('return', res.json(event))

                case 7:
                  _context2.prev = 7
                  _context2.t0 = _context2['catch'](0)
                  res.status(500).json({
                    message: _context2.t0.message || 'Something went wrong'
                  })

                case 10:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[0, 7]]
        )
      })
    )()
  },
  editEventLineup: function editEventLineup(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0
                  _context3.next = 3
                  return (0, _lineup.editLineup)(req.body, req.params.day_id)

                case 3:
                  return _context3.abrupt('return', res.json(true))

                case 6:
                  _context3.prev = 6
                  _context3.t0 = _context3['catch'](0)
                  res.status(500).json({
                    message: _context3.t0.message || 'Something went wrong'
                  })

                case 9:
                case 'end':
                  return _context3.stop()
              }
            }
          },
          _callee3,
          null,
          [[0, 6]]
        )
      })
    )()
  },
  deleteEventLineup: function deleteEventLineup(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        var lineup
        return _regenerator['default'].wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0
                  _context4.next = 3
                  return (0, _lineup.deleteSingleLineup)(req.params.lineup_id)

                case 3:
                  lineup = _context4.sent
                  return _context4.abrupt('return', res.json(lineup))

                case 7:
                  _context4.prev = 7
                  _context4.t0 = _context4['catch'](0)
                  res.status(500).json({
                    message: _context4.t0.message || 'Something went wrong'
                  })

                case 10:
                case 'end':
                  return _context4.stop()
              }
            }
          },
          _callee4,
          null,
          [[0, 7]]
        )
      })
    )()
  }
}
