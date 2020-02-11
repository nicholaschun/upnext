'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _awsSdk = _interopRequireDefault(require('aws-sdk'))

var _fs = _interopRequireDefault(require('fs'))

var _path = _interopRequireDefault(require('path'))

var _dotenv = require('dotenv')

// uploads a base64 image
var fileupload =
  /*#__PURE__*/
  (function() {
    var _ref = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee(file, type, location) {
        var configure, s3, params, _ref2, Location, Key, result

        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  configure = (0, _dotenv.config)()

                  _awsSdk['default'].config.update({
                    secretAccessKey:
                      process.env.awsSecretKey || configure.parsed.awsSecretKey,
                    accessKeyId:
                      process.env.awsAccessKeyId ||
                      configure.parsed.awsAccessKeyId,
                    region:
                      process.env.awsBucketRegion ||
                      configure.parsed.awsBucketRegion
                  })

                  s3 = new _awsSdk['default'].S3()
                  params = {
                    Bucket:
                      ''
                        .concat(process.env.awsResourceBucket, '/')
                        .concat(location) ||
                      ''
                        .concat(configure.parsed.awsResourceBucket, '/')
                        .concat(location),
                    Key: ''.concat(Date.now().toString(), '.').concat(type),
                    Body: file,
                    ACL: 'public-read',
                    ContentEncoding: 'base64',
                    ContentType: 'image/'.concat(type)
                  }
                  _context.prev = 4
                  _context.next = 7
                  return s3.upload(params).promise()

                case 7:
                  _ref2 = _context.sent
                  Location = _ref2.Location
                  Key = _ref2.Key
                  result = {
                    location: Location,
                    key: Key
                  }
                  return _context.abrupt('return', result)

                case 14:
                  _context.prev = 14
                  _context.t0 = _context['catch'](4)
                  throw new Error(_context.t0.message)

                case 17:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[4, 14]]
        )
      })
    )

    return function fileupload(_x, _x2, _x3) {
      return _ref.apply(this, arguments)
    }
  })()

var fileformdataupload =
  /*#__PURE__*/
  (function() {
    var _ref3 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2(file, location) {
        var configure, s3, params, _ref4, Location, Key, result

        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  configure = (0, _dotenv.config)()

                  _awsSdk['default'].config.update({
                    secretAccessKey:
                      process.env.awsSecretKey || configure.parsed.awsSecretKey,
                    accessKeyId:
                      process.env.awsAccessKeyId ||
                      configure.parsed.awsAccessKeyId,
                    region:
                      process.env.awsBucketRegion ||
                      configure.parsed.awsBucketRegion
                  })

                  s3 = new _awsSdk['default'].S3()
                  params = {
                    Bucket:
                      ''
                        .concat(process.env.awsResourceBucket, '/')
                        .concat(location) ||
                      ''
                        .concat(configure.parsed.awsResourceBucket, '/')
                        .concat(location),
                    Key: ''
                      .concat(Date.now().toString())
                      .concat(_path['default'].extname(file.originalname)),
                    Body: _fs['default'].createReadStream(file.path),
                    ACL: 'public-read'
                  }
                  _context2.prev = 4
                  _context2.next = 7
                  return s3.upload(params).promise()

                case 7:
                  _ref4 = _context2.sent
                  Location = _ref4.Location
                  Key = _ref4.Key
                  result = {
                    location: Location,
                    key: Key
                  }
                  return _context2.abrupt('return', result)

                case 14:
                  _context2.prev = 14
                  _context2.t0 = _context2['catch'](4)
                  throw new Error(_context2.t0.message)

                case 17:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[4, 14]]
        )
      })
    )

    return function fileformdataupload(_x4, _x5) {
      return _ref3.apply(this, arguments)
    }
  })()

module.exports = {
  fileupload: fileupload,
  fileformdataupload: fileformdataupload
}
