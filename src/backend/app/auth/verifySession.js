module.exports = function verifySession(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.redirect('/register')
  }
}
