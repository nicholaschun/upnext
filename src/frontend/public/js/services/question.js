const axios = require('axios')
const baseurl = '/api/v1/events/question'

module.exports = {
  createQuestion(eventId, data) {
    return axios.post(`${baseurl}/createquestion/${eventId}`, data)
  },
  listAllQuestions(eventId) {
    return axios.get(`${baseurl}/getallquestions/${eventId}`)
  },

  deleteQuestion(questionId) {
    return axios.delete(`${baseurl}/deletequestion/${questionId}`)
  }
}
