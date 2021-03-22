import passport from 'passport'
import jwtStrategy from 'passport-jwt'
import config from '../../../config'

const ExtractJwt = jwtStrategy.ExtractJwt
const {
  auth: { jwtIssuer, jwtAudience, jwtExpiresIn, jwtSubject, privateKey }
} = config

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: privateKey,
  issuer: jwtIssuer,
  audience: jwtAudience,
  expiresIn: jwtExpiresIn,
  subject: jwtSubject
}

export default () => {
  passport.use(
    new jwtStrategy.Strategy(opts, (jwtPayload, done) => {
      if (jwtPayload) {
        return done(null, jwtPayload)
      } else {
        return done(null, false, {
          message: 'You are not authorized to access this resource'
        })
      }
    })
  )
}
