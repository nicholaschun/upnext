const axios = require('axios')
const baseurl = '/api/v1/events/feedback'

module.exports = {
  createFeedback(eventId, data) {
    return axios.post(`${baseurl}/createfeedback/${eventId}`, data)
  },
  listAllFeedback(eventId) {
    return axios.get(`${baseurl}/getallfeedback/${eventId}`)
  },

  deleteFeedback(feedbackId) {
    return axios.delete(`${baseurl}/deletefeedback/${feedbackId}`)
  }
}
