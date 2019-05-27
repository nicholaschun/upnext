module.exports = {
    lineupPage (req, res) {
        res.render('dashboard/lineup')
    },
    createEventPage (req, res) {
        res.render('dashboard/createevent')
    },
    editEventPage (req, res) {
        res.render('dashboard/editlineup')
    },
    questionsPage (req, res) {
        res.render('dashboard/questions')
    },
    feedbackPage (req, res) {
        res.render('dashboard/feedback')
    }
}