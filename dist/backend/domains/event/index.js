'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _index = _interopRequireDefault(require('../../database/models/index'))

var _index2 = _interopRequireDefault(require('../../utils/index'))

var _handleFile = _interopRequireDefault(require('./../../utils/handleFile'))

/*  run all database queries for events here */
var self = (module.exports = {
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
                      model: _index['default'].EventDay
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
  getEventBySnippet: function getEventBySnippet(snippet) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.next = 2
                return _index['default'].Event.findOne({
                  where: {
                    url_snippet: snippet
                  },
                  include: [
                    {
                      model: _index['default'].EventDay
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
  getEventByDate: function getEventByDate(date) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee4() {
        return _regenerator['default'].wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.next = 2
                return _index['default'].Event.findAll({
                  where: {
                    createdAt: date
                  },
                  include: [
                    {
                      model: _index['default'].EventDay
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
  getEventByName: function getEventByName(name) {
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
                    event_name: name
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
  getUserEvents: function getUserEvents(user_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee6() {
        return _regenerator['default'].wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _context6.next = 2
                return _index['default'].Event.findAll({
                  where: {
                    user_id: user_id
                  },
                  include: [
                    {
                      model: _index['default'].EventDay
                    }
                  ]
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
  createEvent: function createEvent(data, file) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee7() {
        var eventSnippet, featured_image, _ref, location

        return _regenerator['default'].wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                eventSnippet = _index2['default'].generateEventLink(
                  data.event_name
                )
                featured_image = ''

                if (!file) {
                  _context7.next = 10
                  break
                }

                _context7.next = 5
                return _handleFile['default'].uploadDataImage(file, 'events')

              case 5:
                _ref = _context7.sent
                location = _ref.location
                featured_image = location
                _context7.next = 11
                break

              case 10:
                featured_image =
                  'https://upnextresources.s3-eu-west-1.amazonaws.com/events/event_placeholder.jpg'

              case 11:
                _context7.next = 13
                return _index['default'].Event.create({
                  event_id: _index2['default'].genuuid(),
                  event_name: data.event_name,
                  event_days: JSON.parse(data.event_dates.length),
                  event_status: 0,
                  event_dates: data.event_dates,
                  event_image: featured_image,
                  user_id: data.user_id,
                  event_url: 'up-next.co/'.concat(eventSnippet),
                  url_snippet: eventSnippet,
                  description: data.description
                })

              case 13:
                return _context7.abrupt('return', _context7.sent)

              case 14:
              case 'end':
                return _context7.stop()
            }
          }
        }, _callee7)
      })
    )()
  },
  editEvent: function editEvent(payload) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee8() {
        var dateArr,
          originArr,
          featured_image,
          _ref2,
          location,
          deleteDays,
          editMainEvent,
          dayPayload,
          editEventDays

        return _regenerator['default'].wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                /* manipulate data here before inserting into db */
                dateArr = []
                originArr = JSON.parse(payload.body.event_dates)
                originArr.forEach(function(el) {
                  dateArr.push(el.date)
                })
                featured_image = ''

                if (!payload.file) {
                  _context8.next = 12
                  break
                }

                _context8.next = 7
                return _handleFile['default'].uploadDataImage(
                  payload.file,
                  'events'
                )

              case 7:
                _ref2 = _context8.sent
                location = _ref2.location
                featured_image = location
                _context8.next = 13
                break

              case 12:
                featured_image = payload.body.featured_image

              case 13:
                //delete already existing event dates
                deleteDays = _index['default'].EventDay.destroy({
                  where: {
                    event_id: payload.event_id
                  }
                }) //edit main event params

                editMainEvent = _index['default'].Event.update(
                  {
                    event_name: payload.body.event_name,
                    event_days: originArr.length,
                    event_dates: JSON.stringify(dateArr),
                    event_image: featured_image,
                    description: payload.body.description
                  },
                  {
                    where: {
                      event_id: payload.event_id
                    }
                  }
                ) //update event days

                dayPayload = {
                  event_id: payload.event_id,
                  event_dates: originArr,
                  has_questions: payload.body.has_questions,
                  has_feedback: payload.body.has_feedback,
                  hide_time: payload.body.hide_time
                }
                editEventDays = self.editEventDay(dayPayload)
                return _context8.abrupt(
                  'return',
                  Promise.all([deleteDays, editMainEvent, editEventDays])
                )

              case 18:
              case 'end':
                return _context8.stop()
            }
          }
        }, _callee8)
      })
    )()
  },
  editEventDay: function editEventDay(payload) {
    var event_dates = payload.event_dates

    for (var i = 0; i < event_dates.length; i++) {
      if (event_dates[i].day_id && event_dates[i].event_id) {
        _index['default'].EventDay.create({
          event_id: event_dates[i].event_id,
          day_id: event_dates[i].day_id,
          date: event_dates[i].date,
          has_questions: event_dates[i].has_questions,
          has_feedback: event_dates[i].has_feedback,
          hide_time: event_dates[i].hide_time
        })
      } else {
        _index['default'].EventDay.create({
          event_id: payload.event_id,
          day_id: _index2['default'].genuuid(),
          date: event_dates[i].date,
          has_questions: payload.has_questions,
          has_feedback: payload.has_feedback,
          hide_time: payload.hide_time
        })
      }
    }
  },
  publishEvent: function publishEvent(event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee9() {
        return _regenerator['default'].wrap(function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                _context9.next = 2
                return _index['default'].Event.update(
                  {
                    event_status: 1
                  },
                  {
                    where: {
                      event_id: event_id
                    }
                  }
                )

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
  },
  unpublishEvent: function unpublishEvent(event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee10() {
        return _regenerator['default'].wrap(function _callee10$(_context10) {
          while (1) {
            switch ((_context10.prev = _context10.next)) {
              case 0:
                _context10.next = 2
                return _index['default'].Event.update(
                  {
                    event_status: 0
                  },
                  {
                    where: {
                      event_id: event_id
                    }
                  }
                )

              case 2:
                return _context10.abrupt('return', _context10.sent)

              case 3:
              case 'end':
                return _context10.stop()
            }
          }
        }, _callee10)
      })
    )()
  },
  deleteEvent: function deleteEvent(id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee11() {
        return _regenerator['default'].wrap(function _callee11$(_context11) {
          while (1) {
            switch ((_context11.prev = _context11.next)) {
              case 0:
                _context11.next = 2
                return _index['default'].Event.destroy({
                  where: {
                    event_id: id
                  }
                })

              case 2:
                return _context11.abrupt('return', _context11.sent)

              case 3:
              case 'end':
                return _context11.stop()
            }
          }
        }, _callee11)
      })
    )()
  },
  deleteEventDay: function deleteEventDay(id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee12() {
        return _regenerator['default'].wrap(function _callee12$(_context12) {
          while (1) {
            switch ((_context12.prev = _context12.next)) {
              case 0:
                _context12.next = 2
                return _index['default'].EventDay.destroy({
                  where: {
                    event_id: id
                  }
                })

              case 2:
                return _context12.abrupt('return', _context12.sent)

              case 3:
              case 'end':
                return _context12.stop()
            }
          }
        }, _callee12)
      })
    )()
  },
  createEventDay: function createEventDay(payload) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee13() {
        var event_dates, day_ids, eventDayData, i, sampleDaydata
        return _regenerator['default'].wrap(function _callee13$(_context13) {
          while (1) {
            switch ((_context13.prev = _context13.next)) {
              case 0:
                event_dates = payload.event_dates
                day_ids = {}
                eventDayData = []

                for (i = 0; i < event_dates.length; i++) {
                  day_ids[_index2['default'].genuuid()] = event_dates[i]
                  sampleDaydata = {
                    event_id: payload.event_id,
                    day_id: null,
                    date: null,
                    has_questions: payload.has_questions,
                    has_feedback: payload.has_feedback
                  }
                  sampleDaydata.day_id = Object.keys(day_ids)[i]
                  sampleDaydata.date = event_dates[i]
                  eventDayData.push(sampleDaydata)
                }

                return _context13.abrupt(
                  'return',
                  Promise.resolve(
                    _index['default'].EventDay.bulkCreate(eventDayData)
                  )
                )

              case 5:
              case 'end':
                return _context13.stop()
            }
          }
        }, _callee13)
      })
    )()
  },
  getAddedEventDay: function getAddedEventDay(day_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee14() {
        return _regenerator['default'].wrap(function _callee14$(_context14) {
          while (1) {
            switch ((_context14.prev = _context14.next)) {
              case 0:
                return _context14.abrupt(
                  'return',
                  Promise.resolve(
                    _index['default'].EventDay.findOne({
                      where: {
                        day_id: day_id
                      }
                    })
                  )
                )

              case 1:
              case 'end':
                return _context14.stop()
            }
          }
        }, _callee14)
      })
    )()
  }
})
