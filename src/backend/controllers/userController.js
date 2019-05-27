module.exports = {
    dashboard (req, res) {
        res.render('dashboard/index')
    },
    profile (req, res) {
        res.render('dashboard/profile')
    },
    feedbackPage (req, res) {
        res.render('dashboard/feedback')
    }
}