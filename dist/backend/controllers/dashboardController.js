'use strict'

module.exports = {
  dashboard: function dashboard(req, res) {
    // console.log(req.session)
    // console.log(req.user)
    res.render('dashboard/index')
  },
  profile: function profile(req, res) {
    res.render('dashboard/profile')
  },
  lineupPage: function lineupPage(req, res) {
    res.render('dashboard/lineup')
  },
  createEventPage: function createEventPage(req, res) {
    res.render('dashboard/createevent')
  },
  editEventPage: function editEventPage(req, res) {
    res.render('dashboard/editlineup')
  },
  questionsPage: function questionsPage(req, res) {
    res.render('dashboard/questions')
  },
  feedbackPage: function feedbackPage(req, res) {
    res.render('dashboard/feedback')
  },
  changePassPage: function changePassPage(req, res) {
    res.render('dashboard/changepassword')
  }
}
