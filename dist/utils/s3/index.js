'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.createPutToS3 = exports.createS3Client = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _awsSdk = require('aws-sdk')

var _fs = _interopRequireDefault(require('fs'))

var createS3Client = function createS3Client(_ref) {
  var config = _ref.config
  var _config$s = config.s3,
    accessKey = _config$s.accessKey,
    secretKey = _config$s.secretKey
  return new _awsSdk.S3({
    accessKeyId: accessKey,
    secretAccessKey: secretKey
  })
}

exports.createS3Client = createS3Client

var createPutToS3 = function createPutToS3(_ref2) {
  var s3Client = _ref2.s3Client,
    config = _ref2.config
  return /*#__PURE__*/ (function() {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(_ref3) {
        var key, file, bucket, resp
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  ;(key = _ref3.key), (file = _ref3.file)
                  bucket = config.s3.bucket
                  _context.prev = 2
                  _context.next = 5
                  return s3Client
                    .upload({
                      Bucket: bucket,
                      Key: key,
                      Body: _fs['default'].createReadStream(file.path)
                    })
                    .promise()

                case 5:
                  resp = _context.sent
                  return _context.abrupt('return', resp)

                case 9:
                  _context.prev = 9
                  _context.t0 = _context['catch'](2)
                  console.log('could not upload file', _context.t0)
                  throw _context.t0

                case 13:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[2, 9]]
        )
      })
    )

    return function(_x) {
      return _ref4.apply(this, arguments)
    }
  })()
}

exports.createPutToS3 = createPutToS3
