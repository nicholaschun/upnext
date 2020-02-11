'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

var _index2 = _interopRequireDefault(require('../../utils/index'))

/*  run all database queries for lineup here */
module.exports = {
  getLineup: function getLineup(event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return _index['default'].Lineup.findOne({
                  where: {
                    event_id: event_id
                  }
                })

              case 2:
                return _context.abrupt('return', _context.sent)

              case 3:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )()
  },
  createLineup: function createLineup(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                return _context2.abrupt(
                  'return',
                  Promise.resolve(
                    data.forEach(function(event) {
                      _index['default'].Lineup.create({
                        lineup_id: _index2['default'].genuuid(),
                        event_id: event_id,
                        day: event.day,
                        start_time: event.start_time,
                        end_time: event.end_time,
                        description: event.description,
                        duration: event.duration,
                        facilitator: event.facilitator
                      })
                    })
                  )
                )

              case 1:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )()
  },
  editLineup: function editLineup(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                data.forEach(function(event) {
                  return _index['default'].Lineup.update(
                    {
                      day: event.day,
                      start_time: event.start_time,
                      end_time: event.end_time,
                      description: event.description,
                      duration: event.duration,
                      facilitator: event.facilitator
                    },
                    {
                      where: {
                        event_id: event_id
                      }
                    }
                  )
                })

              case 1:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )()
  },
  deleteLineup: function deleteLineup(event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        return _regenerator['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.next = 2
                return _index['default'].Lineup.destroy({
                  where: {
                    event_id: event_id
                  }
                })

              case 2:
                return _context4.abrupt('return', _context4.sent)

              case 3:
              case 'end':
                return _context4.stop()
            }
          }
        }, _callee4)
      })
    )()
  },
  deleteSingleLineup: function deleteSingleLineup(lineup_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee5() {
        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _context5.next = 2
                return _index['default'].Lineup.destroy({
                  where: {
                    lineup_id: lineup_id
                  }
                })

              case 2:
                return _context5.abrupt('return', _context5.sent)

              case 3:
              case 'end':
                return _context5.stop()
            }
          }
        }, _callee5)
      })
    )()
  }
}
