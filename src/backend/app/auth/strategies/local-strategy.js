import passport from 'passport'
import bcrypt from 'bcryptjs'
import localStrategy from 'passport-local'
import { ifUserExists } from '../../../domains/user'

passport.use(
  new localStrategy.Strategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      // check if user email exists
      const user = await ifUserExists(email)
      if (!user) {
        return done(null, false, {
          msg: 'User does not exist'
        })
      }
      if (user.status) {
        bcrypt.compare(password, user.password, (err, isMatched) => {
          if (err) throw err
          if (isMatched) {
            return done(null, user)
          } else {
            return done(null, false, {
              msg: 'Username / Password incorrect'
            })
          }
        })
      } else {
        return done(null, false, {
          msg: 'Please verify your aacount to continue your session'
        })
      }
    }
  )
)
