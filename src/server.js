import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import passport from 'passport'

import routes from './routes'
import config from './../config'
import passportConfig from './service/auth/'

const { port, host, auth } = config
const { sessionSecret, sessionKey } = auth
const app = express()
const defaultPort = port
const defaultHostname = host

app.use(
  session({
    key: sessionKey,
    secret: sessionSecret,
    resave: false,
    expires: false,
    saveUninitialized: true
  })
)
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
passportConfig(passport)

app.use(routes)
app.listen(port, () => {
  console.log(`Running on ${defaultHostname}:${defaultPort}`)
})

export default app
