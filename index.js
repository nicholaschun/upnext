const http = require('http')
const port = 8080
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.write('this is an api for upnext')
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Running on http://${hostname}:${port}`)
})