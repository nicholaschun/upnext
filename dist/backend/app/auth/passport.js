'use strict'

var db = require('./../../database/models/index')

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })
  passport.deserializeUser(function(user, done) {
    // console.log(user)
    db.User.findOne(
      {
        id: user.id
      },
      function(err, user) {
        // console.log(user)
        done(null, user)
      }
    )
  })

  require('./strategies/local-strategy')

  require('./strategies/google-strategy')

  require('./strategies/facebook-strategy')

  require('./strategies/jwt-strategy')
}
