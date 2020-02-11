"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var eventService = require('./../../services/events');

var utils = require('./../../utils/index');

var state = {
  events: null,
  createevent: {
    event_id: null,
    event_name: 'Sample event',
    event_days: '2',
    event_category: 'new',
    event_status: '1',
    has_feedback: true,
    has_questions: false,
    event_url: 'null',
    url_snippet: 'dexup',
    event_image: null,
    additional_info: 'new mc to be announced',
    loader: false,
    description: 'a new description',
    messagebox: {
      type: '',
      message: ''
    }
  },
  getevents: {
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  }
};
var mutations = {
  toggleEventLoader: function toggleEventLoader(state, object) {
    state[object]['loader'] ? state[object]['loader'] = false : state[object]['loader'] = true;
  },
  setMessages: function setMessages(state, data) {
    state[data.state]['messagebox'].message = data.message;
    state[data.state]['messagebox'].type = data.type;
  },
  resetForm: function resetForm(state, object) {
    Object.keys(state[object]).forEach(function (key) {
      state[object][key] = null;
    });
  },
  setEvents: function setEvents(state, data) {
    state.events = data;
  },
  changeEventImage: function changeEventImage(state, file) {
    state.createevent.event_image = file;
  },
  toggleButton: function toggleButton(state, type) {
    state.createevent[type] ? state.createevent[type] = false : state.createevent[type] = true;
  }
};
var actions = {
  createEvent: function createEvent(_ref) {
    var state = _ref.state,
        commit = _ref.commit,
        payload = _ref.payload;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit('toggleEventLoader', 'createevent');
              _context.prev = 1;
              _context.next = 4;
              return eventService.createEvent(state.createevent);

            case 4:
              commit('toggleEventLoader', 'createevent'); // this._vm.$toasted.show('working')
              // utils.toaster()
              // commit('setMessages', {
              //   state: 'createevent',
              //   type: 'success',
              //   message: result.data
              // })

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              commit('toggleEventLoader', 'createevent');
              console.log(_context.t0); // const errors = utils.generateMessage(error)
              // commit('setMessages', {
              //   state: 'createvent',
              //   type: 'error',
              //   message: errors
              // })

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }))();
  },
  geAllEvents: function geAllEvents(_ref2) {
    var state = _ref2.state,
        commit = _ref2.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var result;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit('toggleEventLoader', 'getevents');
              _context2.prev = 1;
              _context2.next = 4;
              return eventService.geAllEvents(state.createevent);

            case 4:
              result = _context2.sent;
              console.log(result);
              commit('toggleEventLoader', 'getevents'); // commit('setEventMessages', {
              //   state: 'events',
              //   type: 'success',
              //   message: result.data
              // })

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              commit('toggleEventLoader', 'getevents'); // const errors = utils.generateMessage(error)
              // commit('setMessages', {
              //   state: 'getevents',
              //   type: 'error',
              //   message: errors
              // })

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }))();
  },
  geOneEvent: function geOneEvent(_ref3) {
    var state = _ref3.state,
        commit = _ref3.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var result;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit('toggleEventLoader', 'getevents');
              _context3.prev = 1;
              _context3.next = 4;
              return eventService.geOneEvents(state.createevent.event_id);

            case 4:
              result = _context3.sent;
              commit('toggleEventLoader', 'getevents');
              commit('setMessages', {
                state: 'events',
                type: 'success',
                message: result.data
              });
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              commit('toggleEventLoader', 'getevents'); // const errors = utils.generateMessage(error)
              // commit('setMessages', {
              //   state: 'getevents',
              //   type: 'error',
              //   message: errors
              // })

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }))();
  },
  getUserEvents: function getUserEvents(_ref4) {
    var commit = _ref4.commit,
        rootState = _ref4.rootState;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var result;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit('toggleEventLoader', 'getevents');
              _context4.prev = 1;
              _context4.next = 4;
              return eventService.getUserEvents(rootState.users.createuser.user_id);

            case 4:
              result = _context4.sent;
              commit('setEvents', result.data);
              console.log(result.data);
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);
              commit('toggleEventLoader', 'getevents'); // const errors = utils.generateMessage(error)
              // commit('setMessages', {
              //   state: 'getevents',
              //   type: 'error',
              //   message: errors
              // })

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }))();
  },
  editEvents: function editEvents(_ref5) {
    var state = _ref5.state,
        commit = _ref5.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee5() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              commit('toggleEventLoader', 'createevent');
              _context5.prev = 1;
              _context5.next = 4;
              return eventService.editEvents(state.createevent.event_id, state.createevent);

            case 4:
              result = _context5.sent;
              commit('toggleEventLoader', 'createevent');
              commit('setMessages', {
                state: 'createevent',
                type: 'success',
                message: result.data
              });
              _context5.next = 14;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              commit('toggleEventLoader', 'createevent');
              errors = utils.generateMessage(_context5.t0);
              commit('setMessages', {
                state: 'createvent',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
    }))();
  },
  publishEvent: function publishEvent(_ref6) {
    var state = _ref6.state,
        commit = _ref6.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee6() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              commit('toggleEventLoader', 'getevents');
              _context6.prev = 1;
              _context6.next = 4;
              return eventService.publishEvent(state.createevent.event_id);

            case 4:
              result = _context6.sent;
              commit('toggleLoader', 'getevents');
              commit('setMessages', {
                state: 'getevents',
                type: 'success',
                message: result.data
              });
              _context6.next = 14;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              commit('toggleEventLoader', 'getevents');
              errors = utils.generateMessage(_context6.t0);
              commit('setMessages', {
                state: 'getevents',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 9]]);
    }))();
  },
  deleteEvent: function deleteEvent(_ref7) {
    var state = _ref7.state,
        commit = _ref7.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee7() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              commit('toggleEventLoader', 'getevents');
              _context7.prev = 1;
              _context7.next = 4;
              return eventService.deleteEvent(state.createevent.event_id);

            case 4:
              result = _context7.sent;
              commit('toggleEventLoader', 'getevents');
              commit('setMessages', {
                state: 'getevents',
                type: 'success',
                message: result.data
              });
              _context7.next = 14;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);
              commit('toggleEventLoader', 'getevents');
              errors = utils.generateMessage(_context7.t0);
              commit('setMessages', {
                state: 'getevents',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 9]]);
    }))();
  },
  updateEventImage: function updateEventImage(_ref8, payload) {
    var commit = _ref8.commit;
    commit('changeEventImage', payload);
  },
  toggleButton: function toggleButton(_ref9, payload) {
    var commit = _ref9.commit;
    commit('toggleButton', payload);
  }
};
module.exports = {
  state: state,
  mutations: mutations,
  actions: actions
};