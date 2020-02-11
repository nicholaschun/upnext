"use strict";

var axios = require('axios');

var baseurl = '/api/v1/events/question';
module.exports = {
  createQuestion: function createQuestion(eventId, data) {
    return axios.post("".concat(baseurl, "/createquestion/").concat(eventId), data);
  },
  listAllQuestions: function listAllQuestions(eventId) {
    return axios.get("".concat(baseurl, "/getallquestions/").concat(eventId));
  },
  deleteQuestion: function deleteQuestion(questionId) {
    return axios["delete"]("".concat(baseurl, "/deletequestion/").concat(questionId));
  }
};