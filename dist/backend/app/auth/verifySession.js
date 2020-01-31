'use strict'

module.exports = function verifySession(req, res, next) {
  if (req.user) {
    return next()
  } else {
    res.redirect('/register')
  }
}
