'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _fileupload = require('./../domains/image/fileupload')

var _default = {
  decodeBase64Image: function decodeBase64Image(image) {
    return new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    )
  },
  getFileType: function getFileType(image) {
    return image.split(';')[0].split('/')[1]
  },
  checkImageSize: function checkImageSize(image) {
    return this.decodeBase64Image(image).length
  },
  uploadImage: function uploadImage(image, location) {
    var _this = this

    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee() {
        var decodedImage, imageType, result
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  //check image size
                  decodedImage = _this.decodeBase64Image(image)
                  imageType = _this.getFileType(image)
                  _context.next = 5
                  return (0, _fileupload.s3upload)(
                    decodedImage,
                    imageType,
                    location
                  )

                case 5:
                  result = _context.sent

                  if (result) {
                    _context.next = 8
                    break
                  }

                  return _context.abrupt('return', null)

                case 8:
                  return _context.abrupt('return', result)

                case 11:
                  _context.prev = 11
                  _context.t0 = _context['catch'](0)
                  throw new Error(_context.t0.message)

                case 14:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 11]]
        )
      })
    )()
  },
  uploadDataImage: function uploadDataImage(image, location) {
    return (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/
      _regenerator['default'].mark(function _callee2() {
        var result
        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0
                  _context2.next = 3
                  return (0, _fileupload.fileformdataupload)(image, location)

                case 3:
                  result = _context2.sent

                  if (result) {
                    _context2.next = 6
                    break
                  }

                  return _context2.abrupt('return', null)

                case 6:
                  return _context2.abrupt('return', result)

                case 9:
                  _context2.prev = 9
                  _context2.t0 = _context2['catch'](0)
                  throw new Error(_context2.t0.message)

                case 12:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[0, 9]]
        )
      })
    )()
  }
}
exports['default'] = _default
