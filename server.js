import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import { config } from 'dotenv'

import users from './src/backend/routes/users'
import events from './src/backend/routes/events'
import providers from './src/backend/routes/providers'
import userDashboard from './src/backend/routes/dashboard'
import guest from './src/backend/routes/guest'
import verifySession from './src/backend/app/auth/verifySession'

const app = express()
const configure = config()
const port = process.env.PORT || configure.parsed.default_port
const hostname = configure.parsed.default_host

app.set('views', './src/frontend/views')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(express.static('./src/frontend/public'))

app.use(
  session({
    key: configure.parsed.session_key,
    secret: configure.parsed.secret_key,
    resave: false,
    expires: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())
require('./src/backend/app/auth/passport')(passport)

/* App routes */

app.use('/', guest)
app.use('/dashboard', verifySession, userDashboard)
app.use(`${configure.parsed.api_base_url}/users`, users)
app.use(`${configure.parsed.api_base_url}/events`, events)
app.use('/auth', providers)

/* Start express server */

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app
