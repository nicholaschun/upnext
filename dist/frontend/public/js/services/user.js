"use strict";

var axios = require('axios');

var baseurl = '/api/v1/users';
module.exports = {
  loginUser: function loginUser(data) {
    return axios.post("".concat(baseurl, "/login"), data);
  },
  createUser: function createUser(data) {
    return axios.post("".concat(baseurl, "/register"), data);
  },
  editUser: function editUser(data) {
    console.log(data);
    return axios.put("".concat(baseurl, "/edituser/").concat(data.user_id), data);
  },
  deleteUser: function deleteUser() {}
};