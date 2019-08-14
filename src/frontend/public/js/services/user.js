const axios = require('axios')
module.exports = {
    loginUser(data){
        return axios.post('/api/login', data)
    }
}