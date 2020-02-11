const Vue = require('vue/dist/vue.js')
const Router = require('vue-router')

const Profile = require('./../components/pages/profile.vue')
const Dashboard = require('./../components/pages/dashboard.vue')
const EditEvent = require('./../components/pages/editevent.vue')
const ViewEvent = require('./../components/pages/viewevent.vue')
const Lineup = require('./../components/pages/lineup.vue')
const Question = require('./../components/pages/questions.vue')
const Feedback = require('./../components/pages/feedback.vue')


Vue.use(Router)

const routes = [
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/editevent',
    name: 'EditEvent',
    component: EditEvent
  },
  {
    path: '/dashboard/viewevent',
    name: 'ViewEvent',
    component: ViewEvent
  },
  {
    path: '/dashboard/lineup',
    name: 'Lineup',
    component: Lineup
  },
  {
    path: '/dashboard/questions',
    name: 'Quesiton',
    component: Question
  },
  {
    path: '/dashboard/feedback',
    name: 'Feedback',
    component: Feedback
  }
]

module.exports = new Router({ routes, mode: 'history' })
