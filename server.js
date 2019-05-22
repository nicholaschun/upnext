const express = require('express')
const app = express()
const port = process.env.port || 8080
const hostname = '127.0.0.1'

app.get('/', (req, res) => {
    res.write('this is an api for upnext')
    res.end()
})

app.listen(port, () => {
    console.log(`Running on http://${hostname}:${port}`)
})