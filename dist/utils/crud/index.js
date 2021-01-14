'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.remove = exports.update = exports.get = exports.list = exports.create = void 0

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

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

var create = function create(_ref) {
  var models = _ref.models
  return function(_ref2) {
    var model = _ref2.model,
      payload = _ref2.payload
    var table = models[model]
    return Promise.resolve(table.create(payload))
  }
}

exports.create = create

var list = function list(_ref3) {
  var models = _ref3.models
  return function(_ref4) {
    var model = _ref4.model,
      _ref4$conditions = _ref4.conditions,
      conditions = _ref4$conditions === void 0 ? null : _ref4$conditions,
      _ref4$relations = _ref4.relations,
      relations = _ref4$relations === void 0 ? null : _ref4$relations
    var table = models[model]
    return Promise.resolve(
      table.findAll({
        where: _objectSpread({}, conditions),
        include: relations
      })
    )
  }
}

exports.list = list

var get = function get(_ref5) {
  var models = _ref5.models
  return function(_ref6) {
    var model = _ref6.model,
      conditions = _ref6.conditions,
      _ref6$relations = _ref6.relations,
      relations = _ref6$relations === void 0 ? null : _ref6$relations
    var table = models[model]
    return Promise.resolve(
      table.findOne({
        where: _objectSpread({}, conditions),
        include: relations
      })
    )
  }
}

exports.get = get

var update = function update(_ref7) {
  var models = _ref7.models
  return function(_ref8) {
    var model = _ref8.model,
      payload = _ref8.payload,
      conditions = _ref8.conditions
    var table = models[model]
    return Promise.resolve(
      table.update(payload, {
        where: _objectSpread({}, conditions)
      })
    )
  }
}

exports.update = update

var remove = function remove(_ref9) {
  var models = _ref9.models
  return function(_ref10) {
    var model = _ref10.model,
      conditions = _ref10.conditions
    var table = models[model]
    return Promise.resolve(
      table.destroy({
        where: _objectSpread({}, conditions)
      })
    )
  }
}

exports.remove = remove
