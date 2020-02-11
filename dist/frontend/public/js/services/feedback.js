"use strict";

var axios = require('axios');

var baseurl = '/api/v1/events/feedback';
module.exports = {
  createFeedback: function createFeedback(eventId, data) {
    return axios.post("".concat(baseurl, "/createfeedback/").concat(eventId), data);
  },
  listAllFeedback: function listAllFeedback(eventId) {
    return axios.get("".concat(baseurl, "/getallfeedback/").concat(eventId));
  },
  deleteFeedback: function deleteFeedback(feedbackId) {
    return axios["delete"]("".concat(baseurl, "/deletefeedback/").concat(feedbackId));
  }
};