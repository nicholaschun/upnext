"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var questionService = require('./../../services/question');

var utils = require('./../../utils/index');

var state = {
  question: [],
  createquestion: {
    question: '',
    email: '',
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  }
};
var mutations = {
  toggleLoader: function toggleLoader(state, object) {
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
  }
};
var actions = {
  createQuestion: function createQuestion(_ref) {
    var state = _ref.state,
        commit = _ref.commit,
        payload = _ref.payload;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit('toggleLoader', 'createquestion');
              _context.prev = 1;
              _context.next = 4;
              return questionService.createQuestion(state.createquestion);

            case 4:
              result = _context.sent;
              commit('toggleLoader', 'createquestion');
              commit('setMessages', {
                state: 'createquestion',
                type: 'success',
                message: result.data
              });
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              commit('toggleLoader', 'createquestion');
              errors = utils.generateMessage(_context.t0);
              commit('setMessages', {
                state: 'createquestion',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }))();
  },
  geAllQuestion: function geAllQuestion(_ref2) {
    var state = _ref2.state,
        commit = _ref2.commit,
        payload = _ref2.payload;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit('toggleLoader', 'createquestion');
              _context2.prev = 1;
              _context2.next = 4;
              return questionService.geAllQuestion(payload);

            case 4:
              result = _context2.sent;
              commit('toggleLoader', 'createquestion');
              commit('setMessages', {
                state: 'feedback',
                type: 'success',
                message: result.data
              });
              _context2.next = 14;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              commit('toggleLoader', 'createquestion');
              errors = utils.generateMessage(_context2.t0);
              commit('setMessages', {
                state: 'createquestion',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }))();
  },
  deleteQuestion: function deleteQuestion(_ref3) {
    var state = _ref3.state,
        commit = _ref3.commit,
        payload = _ref3.payload;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit('toggleLoader', 'createquestion');
              _context3.prev = 1;
              _context3.next = 4;
              return questionService.deleteQuestion(payload);

            case 4:
              result = _context3.sent;
              commit('toggleLoader', 'createquestion');
              commit('setMessages', {
                state: 'createquestion',
                type: 'success',
                message: result.data
              });
              _context3.next = 14;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              commit('toggleLoader', 'createquestion');
              errors = utils.generateMessage(_context3.t0);
              commit('setMessages', {
                state: 'createquestion',
                type: 'error',
                message: errors
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }))();
  }
};
module.exports = {
  state: state,
  mutations: mutations,
  actions: actions
};