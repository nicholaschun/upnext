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
        var lineup
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return (0, _lineup.createLineup)(req.body)

                case 3:
                  lineup = _context.sent
                  return _context.abrupt('return', res.json(lineup))

                case 7:
                  _context.prev = 7
                  _context.t0 = _context['catch'](0)
                  res.status(500).send({
                    message: _context.t0.message || 'Something went wrong'
                  })

                case 10:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 7]]
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
                  res.status(500).send({
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
        var body, lineup
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0
                  body = {
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    description: req.body.description,
                    duration: req.body.duration,
                    facilitator: req.body.facilitator
                  }
                  _context3.next = 4
                  return (0, _lineup.editLineup)(body, req.params.lineup_id)

                case 4:
                  lineup = _context3.sent
                  return _context3.abrupt('return', res.json(lineup))

                case 8:
                  _context3.prev = 8
                  _context3.t0 = _context3['catch'](0)
                  res.status(500).send({
                    message: _context3.t0.message || 'Something went wrong'
                  })

                case 11:
                case 'end':
                  return _context3.stop()
              }
            }
          },
          _callee3,
          null,
          [[0, 8]]
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
                  return (0, _lineup.deleteLineup)(req.params.lineup_id)

                case 3:
                  lineup = _context4.sent
                  return _context4.abrupt('return', res.json(lineup))

                case 7:
                  _context4.prev = 7
                  _context4.t0 = _context4['catch'](0)
                  res.status(500).send({
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
