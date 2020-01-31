'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

var _index2 = _interopRequireDefault(require('../../utils/index'))

/*  run all database queries for events here */
module.exports = {
  getAllEvents: function getAllEvents() {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        return _regenerator['default'].wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2
                return _index['default'].Event.findAll({
                  include: [
                    {
                      model: _index['default'].Lineup
                    }
                  ]
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
  getEventById: function getEventById(id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2
                return _index['default'].Event.findOne({
                  where: {
                    event_id: id
                  },
                  include: [
                    {
                      model: _index['default'].Lineup
                    }
                  ]
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
  },
  getEventByDate: function getEventByDate(date) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.next = 2
                return _index['default'].Event.findAll({
                  where: {
                    createdAt: date
                  },
                  include: [
                    {
                      model: _index['default'].Lineup
                    }
                  ]
                })

              case 2:
                return _context3.abrupt('return', _context3.sent)

              case 3:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )()
  },
  getEventByName: function getEventByName(name) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        return _regenerator['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.next = 2
                return _index['default'].Event.findOne({
                  where: {
                    event_name: name
                  },
                  include: [
                    {
                      model: _index['default'].Lineup
                    }
                  ]
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
  getUserEvents: function getUserEvents(user_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee5() {
        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _context5.next = 2
                return _index['default'].Event.findOne({
                  where: {
                    user_id: user_id
                  },
                  include: [
                    {
                      model: _index['default'].Lineup
                    }
                  ]
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
  },
  createEvent: function createEvent(data) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee6() {
        return _regenerator['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _context6.next = 2
                return _index['default'].Event.create({
                  event_id: _index2['default'].genuuid(),
                  event_name: data.event_name,
                  event_days: data.event_days,
                  event_category: data.event_category,
                  event_status: 0,
                  event_image: data.event_image,
                  has_feedback: data.has_feedback,
                  has_questions: data.has_questions,
                  user_id: data.user_id,
                  event_url: data.event_url,
                  url_snippet: data.url_snippet,
                  additional_info: data.additional_info
                })

              case 2:
                return _context6.abrupt('return', _context6.sent)

              case 3:
              case 'end':
                return _context6.stop()
            }
          }
        }, _callee6)
      })
    )()
  },
  editEvent: function editEvent(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee7() {
        return _regenerator['default'].wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                _context7.next = 2
                return _index['default'].Event.update(
                  {
                    event_name: data.event_name,
                    event_days: data.event_days,
                    event_category: data.event_category,
                    event_image: data.event_image,
                    has_feedback: data.has_feedback,
                    has_questions: data.has_questions,
                    event_url: data.event_url,
                    url_snippet: data.url_snippet,
                    additional_info: data.additional_info
                  },
                  {
                    where: {
                      event_id: event_id
                    }
                  }
                )

              case 2:
                return _context7.abrupt('return', _context7.sent)

              case 3:
              case 'end':
                return _context7.stop()
            }
          }
        }, _callee7)
      })
    )()
  },
  publishEvent: function publishEvent(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee8() {
        return _regenerator['default'].wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                _context8.next = 2
                return _index['default'].Event.update(
                  {
                    event_status: data.event_status
                  },
                  {
                    where: {
                      event_id: event_id
                    }
                  }
                )

              case 2:
                return _context8.abrupt('return', _context8.sent)

              case 3:
              case 'end':
                return _context8.stop()
            }
          }
        }, _callee8)
      })
    )()
  },
  deleteEvent: function deleteEvent(id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee9() {
        return _regenerator['default'].wrap(function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                _context9.next = 2
                return _index['default'].Event.destroy({
                  where: {
                    event_id: id
                  }
                })

              case 2:
                return _context9.abrupt('return', _context9.sent)

              case 3:
              case 'end':
                return _context9.stop()
            }
          }
        }, _callee9)
      })
    )()
  }
}
