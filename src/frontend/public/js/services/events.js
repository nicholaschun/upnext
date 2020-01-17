const axios = require('axios')

module.exports = {
  createEvent(data) {
    return axios.post('/api/login', data)
  },
  createLineup() {},
  listAllEvents() {},
  listUserEvents() {},
  listOneEvent() {},
  updateEvent() {},
  deleteEvent() {},
  publishEvent() {},
  searchEvents() {}
}
