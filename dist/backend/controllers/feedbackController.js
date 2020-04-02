'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _feedback = require('../domains/event/feedback')

var _question = require('../domains/event/question')

var _validate = require('./../utils/validate')

module.exports = {
  sendFeedback: function sendFeedback(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var feedback
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  ;(0, _validate.validate)(req, res)
                  _context.prev = 1
                  _context.next = 4
                  return (0, _feedback.createFeedback)(req.body)

                case 4:
                  feedback = _context.sent
                  return _context.abrupt('return', res.json(feedback))

                case 8:
                  _context.prev = 8
                  _context.t0 = _context['catch'](1)
                  res.status(500).send({
                    message: _context.t0.message || 'Something went wrong'
                  })

                case 11:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[1, 8]]
        )
      })
    )()
  },
  getFeedback: function getFeedback(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        var feedback
        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0
                  _context2.next = 3
                  return (0, _feedback.getFeedbackById)(req.params)

                case 3:
                  feedback = _context2.sent
                  return _context2.abrupt('return', res.json(feedback))

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
  sendQuestion: function sendQuestion(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        var question
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  ;(0, _validate.validate)(req, res)
                  _context3.prev = 1
                  _context3.next = 4
                  return (0, _question.createQuestion)(req.body)

                case 4:
                  question = _context3.sent
                  return _context3.abrupt('return', res.json(question))

                case 8:
                  _context3.prev = 8
                  _context3.t0 = _context3['catch'](1)
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
          [[1, 8]]
        )
      })
    )()
  },
  getQuestions: function getQuestions(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        var feedback
        return _regenerator['default'].wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0
                  _context4.next = 3
                  return (0, _question.getQuestionById)(req.params)

                case 3:
                  feedback = _context4.sent
                  return _context4.abrupt('return', res.json(feedback))

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
  },
  editQuestion: function editQuestion(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee5() {
        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
              case 'end':
                return _context5.stop()
            }
          }
        }, _callee5)
      })
    )()
  },
  deleteQuestion: function deleteQuestion(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee6() {
        return _regenerator['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
              case 'end':
                return _context6.stop()
            }
          }
        }, _callee6)
      })
    )()
  }
}
