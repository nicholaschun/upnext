'use strict'

var axios = require('axios')

module.exports = {
  createEvent: function createEvent(data) {
    return axios.post('/api/login', data)
  },
  createLineup: function createLineup() {},
  listAllEvents: function listAllEvents() {},
  listUserEvents: function listUserEvents() {},
  listOneEvent: function listOneEvent() {},
  updateEvent: function updateEvent() {},
  deleteEvent: function deleteEvent() {},
  publishEvent: function publishEvent() {},
  searchEvents: function searchEvents() {}
}
