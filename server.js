const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.port || 8080
const hostname = '127.0.0.1'
const users = require('./src/backend/routes/users')
const events = require('./src/backend/routes/events')
const url = require('./src/backend/utils/urls')
const web = require('./src/frontend/routes/index')
app.set('views', './src/frontend/views')
app.set('view engine', 'pug')
app.use(express.static('./src/frontend/public'))
app.use(`${url.users}`, users)
app.use(`${url.events}`, events)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'upnext'
})

app.use('/', web)

app.listen(port, () => {
    console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app