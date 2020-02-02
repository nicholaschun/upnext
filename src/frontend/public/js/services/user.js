const axios = require('axios')
const baseurl = '/api/v1/users'

module.exports = {
  loginUser(data) {
    return axios.post(`${baseurl}/login`, data)
  },
  createUser(data) {
    return axios.post(`${baseurl}/register`, data)
  },
  editUser() {},
  deleteUser() {}
}
