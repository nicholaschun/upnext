"use strict";

var toasted = require('vue-toasted');

module.exports = {
  generateMessage: function generateMessage(message) {
    var errors = Array.isArray(message.response.data.errors) ? message.response.data.errors : message.response.data;
    return errors;
  },
  toaster: function toaster() {
    console.log('herere');
    toasted.show('working');
  }
};