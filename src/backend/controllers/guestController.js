module.exports = {
  homePage(req, res) {
    res.render("index");
  },
  signUpPage(req, res) {
    res.render("register");
  },
  resetPassPage(req, res) {
    res.render("resetpassword");
  }
};
