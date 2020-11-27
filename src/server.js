import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import users from './backend/routes/users'
import events from './backend/routes/events'
import feedback from './backend/routes/feedback'
import question from './backend/routes/question'

import authProviders from './backend/routes/authproviders'
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

app.use(`${process.env.api_base_url}/guest`, guest)
app.use('/dashboard', userDashboard)
app.use(
  `${process.env.api_base_url}/users`,
  passport.authenticate('jwt', { session: false }),
  users
)
app.use(
  `${process.env.api_base_url}/events`,
  passport.authenticate('jwt', { session: false }),
  events
)
app.use(
  `${process.env.api_base_url}/feedback`,
  passport.authenticate('jwt', { session: false }),
  feedback
)
app.use(
  `${process.env.api_base_url}/question`,
  passport.authenticate('jwt', { session: false }),
  question
)
app.use(`${process.env.api_base_url}/auth`, authProviders)

/* Start express server */

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`)
})

module.exports = app
