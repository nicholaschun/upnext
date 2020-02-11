'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

/*  run all database queries for questions here */
module.exports = {
  createQuestion: function createQuestion(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                console.log(data)
                return _context.abrupt(
                  'return',
                  Promise.resolve(
                    _index['default'].Question.create({
                      question: data.question,
                      name: data.name,
                      email: data.email,
                      event_id: event_id
                    })
                  )
                )

              case 2:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )()
  },
  getQuestionById: function getQuestionById(id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return _index['default'].Question.findAll({
                  where: {
                    event_id: id
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
