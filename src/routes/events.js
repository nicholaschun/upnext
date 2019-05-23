const express= require('express')
const routes = express.Router()


routes.get('/register', (req, res) => {
    res.send('event routes')
})

module.exports = routes