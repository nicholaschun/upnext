import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import users from './backend/routes/users'
import events from './backend/routes/events'
import providers from './backend/routes/providers'
import userDashboard from './backend/routes/dashboard'
import guest from './backend/routes/guest'
import verifySession from './backend/app/auth/verifySession'

const app = express()
dotenv.config()
const port = process.env.PORT || process.env.default_port
const hostname = '127.0.0.1'

app.use(cors())
app.use(cookieParser())
app.set('views', './src/frontend/views')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(express.static('./src/frontend/public'))

app.use(
  session({
    key: process.env.session_key,
    secret: process.env.secret_key,
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
app.use(`${process.env.api_base_url}/users`, users)
app.use(`${process.env.api_base_url}/events`, events)
app.use('/auth', providers)

/* Start express server */

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app
