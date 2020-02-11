"use strict";

var Vue = require('vue/dist/vue.js');

var Router = require('vue-router');

var Profile = require('./../components/pages/profile.vue');

var Dashboard = require('./../components/pages/dashboard.vue');

var EditEvent = require('./../components/pages/editevent.vue');

var ViewEvent = require('./../components/pages/viewevent.vue');

var Lineup = require('./../components/pages/lineup.vue');

var Question = require('./../components/pages/questions.vue');

var Feedback = require('./../components/pages/feedback.vue');

Vue.use(Router);
var routes = [{
  path: '/dashboard/profile',
  name: 'Profile',
  component: Profile
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/dashboard/editevent',
  name: 'EditEvent',
  component: EditEvent
}, {
  path: '/dashboard/viewevent',
  name: 'ViewEvent',
  component: ViewEvent
}, {
  path: '/dashboard/lineup',
  name: 'Lineup',
  component: Lineup
}, {
  path: '/dashboard/questions',
  name: 'Quesiton',
  component: Question
}, {
  path: '/dashboard/feedback',
  name: 'Feedback',
  component: Feedback
}];
module.exports = new Router({
  routes: routes,
  mode: 'history'
});