import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import users from './backend/routes/users'
import events from './backend/routes/events'
import providers from './backend/routes/providers'
import userDashboard from './backend/routes/dashboard'
import guest from './backend/routes/guest'
import verifySession from './backend/app/auth/verifySession'

const app = express()
const configure = config()
const port = process.env.PORT || configure.parsed.default_port
const hostname = '127.0.0.1'

app.use(cors())
app.use(cookieParser())
app.set('views', './frontend/views')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(express.static('./frontend/public'))

app.use(
  session({
    key: configure.parsed.session_key,
    secret: configure.parsed.secret_key,
    resave: false,
    expires: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./backend/app/auth/passport')(passport)

/* App routes */

app.use('/', guest)
app.use('/dashboard', userDashboard)
app.use(`${configure.parsed.api_base_url}/users`, users)
app.use(`${configure.parsed.api_base_url}/events`, events)
app.use('/auth', providers)

/* Start express server */

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app
