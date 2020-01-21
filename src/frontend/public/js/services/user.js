const axios = require('axios')
const baseurl = 'http://127.0.0.1:8080/api/v1/users'

module.exports = {
  loginUser(data) {
    return axios.post('', data)
  },
  createUser(data) {
    return axios.post(`${baseurl}/register`, data)
  },
  editUser() {},
  deleteUser() {}
}
