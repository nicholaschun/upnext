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
  getLineup: function getLineup(day_id) {
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
                    _index['default'].Lineup.findOne({
                      where: {
                        day_id: day_id
                      }
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
  createLineup: function createLineup(data, event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        var lineupData, i, sampledata
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                // update event day with day info
                _index['default'].EventDay.update(
                  {
                    has_questions: data.dayinfo.has_questions,
                    has_feedback: data.dayinfo.has_feedback,
                    hide_time: data.dayinfo.hide_time
                  },
                  {
                    where: {
                      day_id: data.lineup[0].day_id
                    }
                  }
                ) //delete all lineup with that day before saving new one

                _index['default'].Lineup.destroy({
                  where: {
                    day_id: data.lineup[0].day_id,
                    event_id: event_id
                  }
                })

                lineupData = []

                for (i = 0; i < data.lineup.length; i++) {
                  sampledata = {
                    event_id: event_id,
                    start_time: data.lineup[i].start_time,
                    end_time: data.lineup[i].end_time,
                    day_id: data.lineup[i].day_id,
                    description: data.lineup[i].description,
                    activity: data.lineup[i].activity,
                    duration: data.lineup[i].duration,
                    lineup_id: _index2['default'].genuuid()
                  }
                  lineupData.push(sampledata)
                }

                return _context2.abrupt(
                  'return',
                  Promise.resolve(
                    _index['default'].Lineup.bulkCreate(lineupData)
                  )
                )

              case 5:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2)
      })
    )()
  },
  // async editLineup(data, day_id) {
  //   // update event day with day info
  //   db.EventDay.update({
  //     has_questions: data.dayinfo.has_questions,
  //     has_feedback: data.dayinfo.has_feedback,
  //     hide_time: data.dayinfo.hide_time
  //   }, { where : { day_id: data.lineup[0].day_id }})
  //   //delete all lineup with that day
  //   db.Lineup.destroy({
  //     where: { day_id: day_id }
  //   })
  //   let lineupData = []
  //   for (let i = 0; i < data.length; i++) {
  //     let sampledata = {
  //       event_id: data[i].event_id,
  //       start_time: data[i].start_time,
  //       end_time: data[i].end_time,
  //       day_id: data[i].day_id,
  //       decription: data[i].description,
  //       activity: data[i].activity,
  //       lineup_id: util.genuuid()
  //     }
  //     lineupData.push(sampledata)
  //   }
  //   return Promise.resolve(db.Lineup.bulkCreate(lineupData))
  // },
  deleteLineup: function deleteLineup(event_id) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee3() {
        return _regenerator['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.next = 2
                return _index['default'].Lineup.destroy({
                  where: {
                    event_id: event_id
                  }
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
  deleteSingleLineup: function deleteSingleLineup(lineup_id) {
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
                    lineup_id: lineup_id
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
  getLineupByDay: function getLineupByDay(params) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee5() {
        return _regenerator['default'].wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _context5.next = 2
                return _index['default'].Lineup.findAll({
                  where: {
                    event_id: params.event_id,
                    day_id: params.day_id
                  },
                  include: [
                    {
                      model: _index['default'].EventDay
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
  }
}
