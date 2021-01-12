import { User } from '../../db/models/index'
import initializeJWTStrategy from './strategies/jwt-strategy'

export default passport => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    User.findOne({ id: user.id }, user => {
      done(null, user)
    })
  })
  initializeJWTStrategy()
}
