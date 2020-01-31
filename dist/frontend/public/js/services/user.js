'use strict'

var axios = require('axios')

var baseurl = 'http://127.0.0.1:8080/api/v1/users'
module.exports = {
  loginUser: function loginUser(data) {
    return axios.post(''.concat(baseurl, '/login'), data)
  },
  createUser: function createUser(data) {
    return axios.post(''.concat(baseurl, '/register'), data)
  },
  editUser: function editUser() {},
  deleteUser: function deleteUser() {}
}
