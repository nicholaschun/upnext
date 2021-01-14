'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.createDeleteEventDay = exports.createEditEventDay = exports.createDeleteEvent = exports.createEditEvent = exports.createCreateEvent = exports.createGetUserEvents = exports.createGetOneEvent = exports.createGetEvents = void 0

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _path = _interopRequireDefault(require('path'))

var _awaiting = require('awaiting')

var _index = require('../../utils/index')

var _models = require('../../utils/models')

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    keys.push.apply(keys, symbols)
  }
  return keys
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        ;(0, _defineProperty2['default'])(target, key, source[key])
      })
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        )
      })
    }
  }
  return target
}

var createGetEvents = function createGetEvents(_ref) {
  var listRecord = _ref.listRecord,
    models = _ref.models
  return /*#__PURE__*/ (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee() {
      var relations, data
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              relations = [
                {
                  model: models.User
                }
              ]
              _context.next = 3
              return listRecord({
                model: _models.eventModel,
                relations: relations
              })

            case 3:
              data = _context.sent
              return _context.abrupt('return', {
                data: data,
                statusCode: 200
              })

            case 5:
            case 'end':
              return _context.stop()
          }
        }
      }, _callee)
    })
  )
}

exports.createGetEvents = createGetEvents

var createGetOneEvent = function createGetOneEvent(_ref3) {
  var getRecord = _ref3.getRecord,
    models = _ref3.models
  return /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(req) {
        var params, conditions, relations, data
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                params = req.params
                conditions = {
                  event_id: params.event_id
                }
                relations = [
                  {
                    model: models.User
                  }
                ]
                _context2.next = 5
                return getRecord({
                  model: _models.eventModel,
                  conditions: conditions,
                  relations: relations
                })

              case 5:
                data = _context2.sent
                return _context2.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 7:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )

    return function(_x) {
      return _ref4.apply(this, arguments)
    }
  })()
}

exports.createGetOneEvent = createGetOneEvent

var createGetUserEvents = function createGetUserEvents(_ref5) {
  var listRecord = _ref5.listRecord
  return /*#__PURE__*/ (function() {
    var _ref6 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3(req) {
        var params, conditions, data
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                params = req.params
                conditions = {
                  user_id: params.user_id
                }
                _context3.next = 4
                return listRecord({
                  model: _models.eventModel,
                  conditions: conditions
                })

              case 4:
                data = _context3.sent
                return _context3.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 6:
              case 'end':
                return _context3.stop()
            }
          }
        }, _callee3)
      })
    )

    return function(_x2) {
      return _ref6.apply(this, arguments)
    }
  })()
}

exports.createGetUserEvents = createGetUserEvents

var createCreateEvent = function createCreateEvent(_ref7) {
  var createRecord = _ref7.createRecord,
    config = _ref7.config,
    putToS3 = _ref7.putToS3
  return /*#__PURE__*/ (function() {
    var _ref8 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee5(req) {
        var defaultEventImage,
          body,
          file,
          user,
          eventSnippet,
          event_id,
          featuredImage,
          key,
          _yield$putToS,
          Location,
          eventPayload,
          event_dates,
          data

        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                defaultEventImage = config.defaultEventImage
                ;(body = req.body), (file = req.file), (user = req.user)
                eventSnippet = (0, _index.generateEventLink)(body.event_name)
                event_id = (0, _index.genuuid)()
                featuredImage = defaultEventImage

                if (!file) {
                  _context5.next = 12
                  break
                }

                key = 'events/'
                  .concat(Date.now().toString())
                  .concat(_path['default'].extname(file.originalname))
                _context5.next = 9
                return putToS3({
                  key: key,
                  file: file
                })

              case 9:
                _yield$putToS = _context5.sent
                Location = _yield$putToS.Location
                featuredImage = Location

              case 12:
                eventPayload = _objectSpread(
                  _objectSpread({}, body),
                  {},
                  {
                    event_id: event_id,
                    event_image: featuredImage,
                    user_id: user.user.data.user_id,
                    event_url: 'up-next.co/'.concat(eventSnippet),
                    url_snippet: eventSnippet
                  }
                ) // creates event dates

                event_dates = body.event_dates
                ;(0, _index.clearTempFolder)()
                _context5.next = 17
                return (0, _awaiting.map)(
                  event_dates,
                  event_dates.length,
                  /*#__PURE__*/ (function() {
                    var _ref9 = (0, _asyncToGenerator2['default'])(
                      /*#__PURE__*/ _regenerator['default'].mark(
                        function _callee4(event_date) {
                          var eventDayPayload
                          return _regenerator['default'].wrap(
                            function _callee4$(_context4) {
                              while (1) {
                                switch ((_context4.prev = _context4.next)) {
                                  case 0:
                                    eventDayPayload = {
                                      event_id: event_id,
                                      day_id: (0, _index.genuuid)(),
                                      date: event_date,
                                      has_questions: 0,
                                      has_feedback: 0,
                                      hide_time: 0
                                    }
                                    _context4.next = 3
                                    return createRecord({
                                      model: _models.eventDayModel,
                                      payload: eventDayPayload
                                    })

                                  case 3:
                                  case 'end':
                                    return _context4.stop()
                                }
                              }
                            },
                            _callee4
                          )
                        }
                      )
                    )

                    return function(_x4) {
                      return _ref9.apply(this, arguments)
                    }
                  })()
                )

              case 17:
                _context5.next = 19
                return createRecord({
                  model: _models.eventModel,
                  payload: eventPayload
                })

              case 19:
                data = _context5.sent
                ;(0, _index.clearTempFolder)()
                return _context5.abrupt('return', {
                  data: data,
                  statusCode: 201
                })

              case 22:
              case 'end':
                return _context5.stop()
            }
          }
        }, _callee5)
      })
    )

    return function(_x3) {
      return _ref8.apply(this, arguments)
    }
  })()
}

exports.createCreateEvent = createCreateEvent

var createEditEvent = function createEditEvent(_ref10) {
  var updateRecord = _ref10.updateRecord,
    config = _ref10.config,
    putToS3 = _ref10.putToS3
  return /*#__PURE__*/ (function() {
    var _ref11 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee6(req) {
        var params,
          body,
          file,
          defaultEventImage,
          conditions,
          featuredImage,
          key,
          _yield$putToS2,
          Location,
          eventPayload,
          data

        return _regenerator['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                ;(params = req.params), (body = req.body), (file = req.file)
                defaultEventImage = config.defaultEventImage
                conditions = {
                  event_id: params.event_id
                }
                featuredImage = defaultEventImage

                if (!file) {
                  _context6.next = 11
                  break
                }

                key = 'events/'
                  .concat(Date.now().toString())
                  .concat(_path['default'].extname(file.originalname))
                _context6.next = 8
                return putToS3({
                  key: key,
                  file: file
                })

              case 8:
                _yield$putToS2 = _context6.sent
                Location = _yield$putToS2.Location
                featuredImage = Location

              case 11:
                eventPayload = _objectSpread(
                  _objectSpread({}, body),
                  {},
                  {
                    event_image: featuredImage
                  }
                )
                _context6.next = 14
                return updateRecord({
                  model: _models.eventModel,
                  conditions: conditions,
                  payload: eventPayload
                })

              case 14:
                data = _context6.sent
                ;(0, _index.clearTempFolder)()
                return _context6.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 17:
              case 'end':
                return _context6.stop()
            }
          }
        }, _callee6)
      })
    )

    return function(_x5) {
      return _ref11.apply(this, arguments)
    }
  })()
}

exports.createEditEvent = createEditEvent

var createDeleteEvent = function createDeleteEvent(_ref12) {
  var deleteRecord = _ref12.deleteRecord
  return /*#__PURE__*/ (function() {
    var _ref13 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee7(req) {
        var params, conditions, data
        return _regenerator['default'].wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                params = req.params
                conditions = {
                  event_id: params.event_id
                }
                _context7.next = 4
                return deleteRecord({
                  model: _models.eventModel,
                  conditions: conditions
                })

              case 4:
                data = _context7.sent
                return _context7.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 6:
              case 'end':
                return _context7.stop()
            }
          }
        }, _callee7)
      })
    )

    return function(_x6) {
      return _ref13.apply(this, arguments)
    }
  })()
}

exports.createDeleteEvent = createDeleteEvent

var createEditEventDay = function createEditEventDay(_ref14) {
  var updateRecord = _ref14.updateRecord
  return /*#__PURE__*/ (function() {
    var _ref15 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee8(req) {
        var params, payload, conditions, data
        return _regenerator['default'].wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                ;(params = req.params), (payload = req.body)
                conditions = {
                  day_id: params.day_id
                }
                _context8.next = 4
                return updateRecord({
                  model: _models.eventDayModel,
                  conditions: conditions,
                  payload: payload
                })

              case 4:
                data = _context8.sent
                return _context8.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 6:
              case 'end':
                return _context8.stop()
            }
          }
        }, _callee8)
      })
    )

    return function(_x7) {
      return _ref15.apply(this, arguments)
    }
  })()
}

exports.createEditEventDay = createEditEventDay

var createDeleteEventDay = function createDeleteEventDay(_ref16) {
  var deleteRecord = _ref16.deleteRecord
  return /*#__PURE__*/ (function() {
    var _ref17 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee9(req) {
        var params, conditions, data
        return _regenerator['default'].wrap(function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                params = req.params
                conditions = {
                  day_id: params.day_id
                }
                _context9.next = 4
                return deleteRecord({
                  model: _models.eventDayModel,
                  conditions: conditions
                })

              case 4:
                data = _context9.sent
                return _context9.abrupt('return', {
                  data: data,
                  statusCode: 200
                })

              case 6:
              case 'end':
                return _context9.stop()
            }
          }
        }, _callee9)
      })
    )

    return function(_x8) {
      return _ref17.apply(this, arguments)
    }
  })()
}

exports.createDeleteEventDay = createDeleteEventDay
