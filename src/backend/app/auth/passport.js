const db = require('./../../database/models/index')
module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    // console.log(user)
    db.User.findOne({ id: user.id }, (err, user) => {
      // console.log(user)
      done(null, user)
    })
  })

  require('./strategies/local-strategy')
  require('./strategies/google-strategy')
  require('./strategies/facebook-strategy')
  require('./strategies/jwt-strategy')
}
