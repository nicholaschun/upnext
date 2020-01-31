'use strict'

module.exports = {
  homePage: function homePage(req, res) {
    res.render('index')
  },
  signUpPage: function signUpPage(req, res) {
    res.render('register')
  },
  resetPassPage: function resetPassPage(req, res) {
    res.render('resetpassword')
  }
}
