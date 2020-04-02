'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

var _index2 = _interopRequireDefault(require('../../utils/index'))

/*  run all database queries for feedback here */
module.exports = {
  createFeedback: function createFeedback(data) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                return _context.abrupt(
                  'return',
                  Promise.resolve(
                    _index['default'].Feedback.create({
                      feedback_id: _index2['default'].genuuid(),
                      feedback: data.feedback,
                      event_id: data.event_id,
                      day_id: data.day_id
                    })
                  )
                )

              case 1:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )()
  },
  getFeedbackById: function getFeedbackById(data) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return _index['default'].Feedback.findAll({
                  where: {
                    event_id: data.event_id,
                    day_id: data.day_id
                  }
                })

              case 2:
                return _context2.abrupt('return', _context2.sent)

              case 3:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )()
  }
}
