import express from 'express'
// import expressValidator from 'express-validator'
import bodyParser from 'body-parser'

import users from './src/backend/routes/users'
import events from './src/backend/routes/events'
import url from './src/backend/utils/urls'
import web from './src/frontend/routes/index'
import constants from './constants'

const app = express()
const port = process.env.PORT || constants.DEFAULT_PORT
const hostname = constants.DEFAULT_HOST

app.set('views', './src/frontend/views')
app.set('view engine', 'pug')

// app.use(expressValidator)
app.use(bodyParser.json())
app.use(express.static('./src/frontend/public'))
app.use('/', web)
app.use('/api', users)
// app.use(`/api/${API_VERSION}`, users)
app.use(`${url.events}`, events)

app.listen(port, () => {
    console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app