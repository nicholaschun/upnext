'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.clearTempFolder = exports.respondWithData = exports.comparePassword = exports.generateEventLink = exports.genuuid = exports.encryptPass = exports.genToken = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _crypto = _interopRequireDefault(require('crypto'))

var _bcryptjs = _interopRequireDefault(require('bcryptjs'))

var _uuid = _interopRequireDefault(require('uuid'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it
  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it
      var i = 0
      var F = function F() {}
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true }
          return { done: false, value: o[i++] }
        },
        e: function e(_e) {
          throw _e
        },
        f: F
      }
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  var normalCompletion = true,
    didErr = false,
    err
  return {
    s: function s() {
      it = o[Symbol.iterator]()
    },
    n: function n() {
      var step = it.next()
      normalCompletion = step.done
      return step
    },
    e: function e(_e2) {
      didErr = true
      err = _e2
    },
    f: function f() {
      try {
        if (!normalCompletion && it['return'] != null) it['return']()
      } finally {
        if (didErr) throw err
      }
    }
  }
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i]
  }
  return arr2
}

var genToken = function genToken(val) {
  return _crypto['default']
    .createHash('sha256')
    .update(val)
    .digest('hex')
}

exports.genToken = genToken

var encryptPass = function encryptPass(password) {
  return _bcryptjs['default'].hashSync(password, 10)
}

exports.encryptPass = encryptPass

var genuuid = function genuuid() {
  return (0, _uuid['default'])()
}

exports.genuuid = genuuid

var generateEventLink = function generateEventLink(snippet) {
  var lower = snippet.toLowerCase()
  return lower.split(' ').join('-')
}

exports.generateEventLink = generateEventLink

var comparePassword = /*#__PURE__*/ (function() {
  var _ref = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee(
      password,
      dbPass
    ) {
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2
              return _bcryptjs['default'].compare(password, dbPass)

            case 2:
              return _context.abrupt('return', _context.sent)

            case 3:
            case 'end':
              return _context.stop()
          }
        }
      }, _callee)
    })
  )

  return function comparePassword(_x, _x2) {
    return _ref.apply(this, arguments)
  }
})()

exports.comparePassword = comparePassword

var respondWithData = function respondWithData(result, res) {
  var data = result.data,
    statusCode = result.statusCode
  return res.status(statusCode).json(data)
}

exports.respondWithData = respondWithData

var clearTempFolder = /*#__PURE__*/ (function() {
  var _ref2 = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee2() {
      var dir
      return _regenerator['default'].wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              dir = ''.concat(process.cwd(), '/temp')

              _fs['default'].readdir(dir, function(err, files) {
                if (err) throw err

                var _iterator = _createForOfIteratorHelper(files),
                  _step

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var file = _step.value

                    _fs['default'].unlink(
                      _path['default'].join(dir, file),
                      function(err) {
                        if (err) throw err
                      }
                    )
                  }
                } catch (err) {
                  _iterator.e(err)
                } finally {
                  _iterator.f()
                }
              })

            case 2:
            case 'end':
              return _context2.stop()
          }
        }
      }, _callee2)
    })
  )

  return function clearTempFolder() {
    return _ref2.apply(this, arguments)
  }
})()

exports.clearTempFolder = clearTempFolder
