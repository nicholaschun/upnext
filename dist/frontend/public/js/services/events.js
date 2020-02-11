"use strict";

var axios = require('axios');

var baseurl = '/api/v1/events';
module.exports = {
  createEvent: function createEvent(data) {
    console.log(data);
    return axios.post("".concat(baseurl, "/createevent"), data);
  },
  listAllEvents: function listAllEvents() {
    return axios.get("".concat(baseurl, "/getallevents"));
  },
  getUserEvents: function getUserEvents(userId) {
    return axios.get("".concat(baseurl, "/getuserevents/").concat(userId));
  },
  listUserEvents: function listUserEvents(userId) {
    return axios.get("".concat(baseurl, "/getuserevents/").concat(userId));
  },
  listOneEvent: function listOneEvent(eventId) {
    return axios.get("".concat(baseurl, "/getevent/").concat(eventId));
  },
  updateEvent: function updateEvent(eventId, data) {
    return axios.put("".concat(baseurl, "/editevent/").concat(eventId), data);
  },
  deleteEvent: function deleteEvent(eventId) {
    return axios.put("".concat(baseurl, "/deleteevent/").concat(eventId));
  },
  publishEvent: function publishEvent(eventId) {
    return axios.put("".concat(baseurl, "/publishevent/").concat(eventId));
  },
  createLineup: function createLineup() {},
  searchEvents: function searchEvents() {}
};