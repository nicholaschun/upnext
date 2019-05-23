const express= require('express')
const routes = express.Router()


routes.get('/register', (req, res) => {
    res.send('user routes')
})

module.exports = routes