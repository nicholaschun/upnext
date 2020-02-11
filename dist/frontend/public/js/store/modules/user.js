"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var userService = require('./../../services/user');

var utils = require('./../../utils/index');

var state = {
  users: [],
  createuser: {
    user_id: 'c1ac68a9-dd8e-4c3f-a1d0-e33fd5e2de27',
    firstname: 'Nicholas',
    lastname: 'Mamiya',
    email: 'nicholaschunryne@gmail.com',
    organization: 'i5',
    password: 'cripx...',
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  },
  login: {
    email: 'nicholaschunryne@gmail.com',
    password: 'cripx...',
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  },
  resetpassword: {
    email: 'nicholaschunryne@gmail.com',
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
  registerUser: function registerUser(_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit('toggleLoader', 'createuser');
              _context.prev = 1;
              _context.next = 4;
              return userService.createUser(state.createuser);

            case 4:
              result = _context.sent;
              commit('toggleLoader', 'createuser');
              commit('setMessages', {
                state: 'createuser',
                type: 'success',
                message: result.data
              }); // commit('resetForm', 'createuser')

              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              commit('toggleLoader', 'createuser');
              errors = utils.generateMessage(_context.t0);
              commit('setMessages', {
                state: 'createuser',
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
  loginUser: function loginUser(_ref2) {
    var commit = _ref2.commit,
        state = _ref2.state;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit('toggleLoader', 'login');
              _context2.prev = 1;
              _context2.next = 4;
              return userService.loginUser(state.login);

            case 4:
              result = _context2.sent;
              console.log(result);
              window.location = '/dashboard';
              commit('toggleLoader', 'login');
              _context2.next = 16;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              commit('toggleLoader', 'login');
              errors = utils.generateMessage(_context2.t0);
              commit('setMessages', {
                state: 'login',
                type: 'error',
                message: errors
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 10]]);
    }))();
  },
  updateUser: function updateUser(_ref3) {
    var commit = _ref3.commit,
        state = _ref3.state;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var result, errors;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit('toggleLoader', 'createuser');
              _context3.prev = 1;
              _context3.next = 4;
              return userService.editUser(state.createuser);

            case 4:
              result = _context3.sent;
              commit('toggleLoader', 'createuser');
              commit('setMessages', {
                state: 'createuser',
                type: 'success',
                message: result.data
              });
              _context3.next = 15;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              commit('toggleLoader', 'createuser');
              errors = utils.generateMessage(_context3.t0);
              commit('setMessages', {
                state: 'createuser',
                type: 'error',
                message: errors
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }))();
  },
  sendResetPasswordLink: function sendResetPasswordLink(_ref4) {
    var commit = _ref4.commit;
    return (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commit('toggleLoader', 'resetpassword');

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
module.exports = {
  state: state,
  mutations: mutations,
  actions: actions
};