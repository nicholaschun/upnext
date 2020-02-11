const axios = require('axios')
const baseurl = '/api/v1/events'

module.exports = {
  createEvent(data) {
    console.log(data)
    return axios.post(`${baseurl}/createevent`, data
    )
  },
  listAllEvents() {
    return axios.get(`${baseurl}/getallevents`)
  },
  getUserEvents(userId) {
    return axios.get(`${baseurl}/getuserevents/${userId}`)
  },
  listUserEvents(userId) {
    return axios.get(`${baseurl}/getuserevents/${userId}`)
  },
  listOneEvent(eventId) {
    return axios.get(`${baseurl}/getevent/${eventId}`)
  },
  updateEvent(eventId, data) {
    return axios.put(`${baseurl}/editevent/${eventId}`, data)
  },
  deleteEvent(eventId) {
    return axios.put(`${baseurl}/deleteevent/${eventId}`)
  },
  publishEvent(eventId) {
    return axios.put(`${baseurl}/publishevent/${eventId}`)
  },
  createLineup() {},
  searchEvents() {}
}
