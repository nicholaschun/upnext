'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _awilix = require('awilix')

var _core = require('../services/events/core')

var _core2 = require('../services/lineups/core')

var _core3 = require('../services/auth/core')

var _core4 = require('../services/user/core')

var _config = _interopRequireDefault(require('../config'))

var _index = _interopRequireDefault(require('./../db/models/index'))

var _s = require('../utils/s3')

var _crud = require('./../utils/crud')

var container = (0, _awilix.createContainer)({
  injectionMode: _awilix.InjectionMode.PROXY
})
container.register({
  config: (0, _awilix.asValue)(_config['default']),
  models: (0, _awilix.asValue)(_index['default']),
  createRecord: (0, _awilix.asFunction)(_crud.create).scoped(),
  getRecord: (0, _awilix.asFunction)(_crud.get).scoped(),
  listRecord: (0, _awilix.asFunction)(_crud.list).scoped(),
  updateRecord: (0, _awilix.asFunction)(_crud.update).scoped(),
  deleteRecord: (0, _awilix.asFunction)(_crud.remove).scoped(),
  getAllEvents: (0, _awilix.asFunction)(_core.createGetEvents).scoped(),
  createEvent: (0, _awilix.asFunction)(_core.createCreateEvent).scoped(),
  getOneEvent: (0, _awilix.asFunction)(_core.createGetOneEvent).scoped(),
  getUserEvents: (0, _awilix.asFunction)(_core.createGetUserEvents).scoped(),
  editEvent: (0, _awilix.asFunction)(_core.createEditEvent).scoped(),
  deleteEvent: (0, _awilix.asFunction)(_core.createDeleteEvent).scoped(),
  editEventDay: (0, _awilix.asFunction)(_core.createEditEventDay).scoped(),
  deleteEventDay: (0, _awilix.asFunction)(_core.createDeleteEventDay).scoped(),
  saveLineup: (0, _awilix.asFunction)(_core2.createSaveLineup).scoped(),
  getLineups: (0, _awilix.asFunction)(_core2.createGetLineup).scoped(),
  register: (0, _awilix.asFunction)(_core3.createRegister).scoped(),
  login: (0, _awilix.asFunction)(_core3.createLogin).scoped(),
  loginWithGoogle: (0, _awilix.asFunction)(
    _core3.createWithLoginSocial
  ).scoped(),
  loginWithFacebook: (0, _awilix.asFunction)(
    _core3.createWithLoginSocial
  ).scoped(),
  authenticatedUser: (0, _awilix.asFunction)(
    _core4.createAuthenticatedUser
  ).scoped(),
  editUser: (0, _awilix.asFunction)(_core4.createEditUser).scoped(),
  s3Client: (0, _awilix.asFunction)(_s.createS3Client).scoped(),
  putToS3: (0, _awilix.asFunction)(_s.createPutToS3).scoped()
})
var _default = container
exports['default'] = _default
