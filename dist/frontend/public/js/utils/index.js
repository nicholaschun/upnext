'use strict'

module.exports = {
  generateMessage: function generateMessage(message) {
    var errors = Array.isArray(message.response.data.errors)
      ? message.response.data.errors
      : message.response.data
    return errors
  }
}
