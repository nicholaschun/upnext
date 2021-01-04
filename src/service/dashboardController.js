module.exports = {
  dashboard(req, res) {
    // console.log(req.session)
    // console.log(req.user)
    res.render('dashboard/index')
  },
  profile(req, res) {
    res.render('dashboard/profile')
  },
  lineupPage(req, res) {
    res.render('dashboard/lineup')
  },
  createEventPage(req, res) {
    res.render('dashboard/createevent')
  },
  editEventPage(req, res) {
    res.render('dashboard/editlineup')
  },
  questionsPage(req, res) {
    res.render('dashboard/questions')
  },
  feedbackPage(req, res) {
    res.render('dashboard/feedback')
  },
  changePassPage(req, res) {
    res.render('dashboard/changepassword')
  }
}
