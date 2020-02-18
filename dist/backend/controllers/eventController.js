'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = require('../domains/event/index')

var _validate = require('./../utils/validate')

var _user = require('../domains/user')

module.exports = {
  createEvent: function createEvent(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var user, event
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  ;(0, _validate.validate)(req, res)
                  _context.prev = 1
                  _context.next = 4
                  return (0, _user.ifUserIdExists)(req.body.user_id)

                case 4:
                  user = _context.sent

                  if (user) {
                    _context.next = 7
                    break
                  }

                  return _context.abrupt(
                    'return',
                    res.json('Invalid user id provided')
                  )

                case 7:
                  _context.next = 9
                  return (0, _index.createEvent)(req.body, req.file)

                case 9:
                  event = _context.sent
                  return _context.abrupt('return', res.json(event))

                case 13:
                  _context.prev = 13
                  _context.t0 = _context['catch'](1)
                  res.status(500).send({
                    message: _context.t0.message || 'Something went wrong'
                  })

                case 16:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[1, 13]]
        )
      })
    )()
  },
  editEvent: function editEvent(req, res) {
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
                  return (0, _index.editEvent)(req, req.params.event_id)

                case 3:
                  event = _context2.sent

                  if (event) {
                    _context2.next = 6
                    break
                  }

                  return _context2.abrupt(
                    'return',
                    res.status(404).send('event with given id not found')
                  )

                case 6:
                  return _context2.abrupt('return', res.json(event))

                case 9:
                  _context2.prev = 9
                  _context2.t0 = _context2['catch'](0)
                  console.log(_context2.t0)
                  res.status(500).send({
                    message: _context2.t0.message || 'Something went wrong'
                  })

                case 13:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[0, 9]]
        )
      })
    )()
  },
  publishEvent: function publishEvent(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        var event
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0
                  _context3.next = 3
                  return (0, _index.publishEvent)(req.params.event_id)

                case 3:
                  event = _context3.sent

                  if (event) {
                    _context3.next = 6
                    break
                  }

                  return _context3.abrupt(
                    'return',
                    res.status(404).send('event with given id not found')
                  )

                case 6:
                  return _context3.abrupt('return', res.json(event))

                case 9:
                  _context3.prev = 9
                  _context3.t0 = _context3['catch'](0)
                  res.status(500).send({
                    message: _context3.t0.message || 'Something went wrong'
                  })

                case 12:
                case 'end':
                  return _context3.stop()
              }
            }
          },
          _callee3,
          null,
          [[0, 9]]
        )
      })
    )()
  },
  unpublishEvent: function unpublishEvent(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        var event
        return _regenerator['default'].wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0
                  _context4.next = 3
                  return (0, _index.unpublishEvent)(req.params.event_id)

                case 3:
                  event = _context4.sent

                  if (event) {
                    _context4.next = 6
                    break
                  }

                  return _context4.abrupt(
                    'return',
                    res.status(404).send('event with given id not found')
                  )

                case 6:
                  return _context4.abrupt('return', res.json(event))

                case 9:
                  _context4.prev = 9
                  _context4.t0 = _context4['catch'](0)
                  res.status(500).send({
                    message: _context4.t0.message || 'Something went wrong'
                  })

                case 12:
                case 'end':
                  return _context4.stop()
              }
            }
          },
          _callee4,
          null,
          [[0, 9]]
        )
      })
    )()
  },
  getAllEvents: function getAllEvents(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee5() {
        var events
        return _regenerator['default'].wrap(
          function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  _context5.prev = 0
                  _context5.next = 3
                  return (0, _index.getAllEvents)()

                case 3:
                  events = _context5.sent
                  return _context5.abrupt('return', res.json(events))

                case 7:
                  _context5.prev = 7
                  _context5.t0 = _context5['catch'](0)
                  res.status(500).send({
                    message: _context5.t0.message || 'Something went wrong'
                  })

                case 10:
                case 'end':
                  return _context5.stop()
              }
            }
          },
          _callee5,
          null,
          [[0, 7]]
        )
      })
    )()
  },
  getEventById: function getEventById(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee6() {
        var event
        return _regenerator['default'].wrap(
          function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  _context6.prev = 0
                  _context6.next = 3
                  return (0, _index.getEventById)(req.params.event_id)

                case 3:
                  event = _context6.sent

                  if (event) {
                    _context6.next = 6
                    break
                  }

                  return _context6.abrupt(
                    'return',
                    res.status(404).send('event with given id not found')
                  )

                case 6:
                  return _context6.abrupt('return', res.json(event))

                case 9:
                  _context6.prev = 9
                  _context6.t0 = _context6['catch'](0)
                  res.status(500).send({
                    message: _context6.t0.message || 'Something went wrong'
                  })

                case 12:
                case 'end':
                  return _context6.stop()
              }
            }
          },
          _callee6,
          null,
          [[0, 9]]
        )
      })
    )()
  },
  deleteEvent: function deleteEvent(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee7() {
        var event
        return _regenerator['default'].wrap(
          function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.prev = 0
                  _context7.next = 3
                  return (0, _index.deleteEvent)(req.params.event_id)

                case 3:
                  event = _context7.sent

                  if (event) {
                    _context7.next = 6
                    break
                  }

                  return _context7.abrupt(
                    'return',
                    res.status(404).send('event with given id not found')
                  )

                case 6:
                  return _context7.abrupt('return', res.json(event))

                case 9:
                  _context7.prev = 9
                  _context7.t0 = _context7['catch'](0)
                  res.status(500).send({
                    message: _context7.t0.message || 'Something went wrong'
                  })

                case 12:
                case 'end':
                  return _context7.stop()
              }
            }
          },
          _callee7,
          null,
          [[0, 9]]
        )
      })
    )()
  },
  getUserEvents: function getUserEvents(req, res) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee8() {
        var events
        return _regenerator['default'].wrap(
          function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.prev = 0
                  _context8.next = 3
                  return (0, _index.getUserEvents)(req.params.user_id)

                case 3:
                  events = _context8.sent

                  if (events) {
                    _context8.next = 6
                    break
                  }

                  return _context8.abrupt(
                    'return',
                    res.status(404).send('user with given id not found')
                  )

                case 6:
                  return _context8.abrupt('return', res.json(events))

                case 9:
                  _context8.prev = 9
                  _context8.t0 = _context8['catch'](0)
                  res.status(500).send({
                    message: _context8.t0.message || 'Something went wrong'
                  })

                case 12:
                case 'end':
                  return _context8.stop()
              }
            }
          },
          _callee8,
          null,
          [[0, 9]]
        )
      })
    )()
  }
}
