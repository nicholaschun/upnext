"use strict";

var Vue = require('vue/dist/vue.js');

var Veevalidate = require('vee-validate');

var VueCookies = require('vue-cookies');

var Toasted = require('vue-toasted/dist/vue-toasted');

var store = require('./store/index.js');

var router = require('./routes/index.js');

Vue.use(Veevalidate);
Vue.use(store);
Vue.use(VueCookies);
Vue.use(Toasted);
Vue.component('testComponent', require('./components/test.vue'));
Vue.component('searchComponent', require('./components/search.vue'));
Vue.component('registerHeaderComponent', require('./components/registerHeader.vue'));
Vue.component('createLineupComponent', require('./components/createLineupButton.vue'));
Vue.component('registerComponent', require('./components/register.vue'));
Vue.component('carouselComponent', require('./components/carousel.vue'));
Vue.component('resetPasswordComponent', require('./components/resetPassword.vue'));
/* Dashboard components */

Vue.component('createEventComponent', require('./components/dashboard/createEvent.vue'));
Vue.component('dashboardComponent', require('./components/dashboard/dashboard.vue'));
Vue.component('dashboardComponent', require('./components/app.vue'));
Vue.component('lineupComponent', require('./components/dashboard/lineup.vue'));
Vue.component('editLineupComponent', require('./components/dashboard/editLineup.vue'));
Vue.component('feedbackComponent', require('./components/dashboard/feedback.vue'));
Vue.component('questionsComponent', require('./components/dashboard/questions.vue'));
Vue.component('profileComponent', require('./components/dashboard/profile.vue'));
var app = new Vue({
  el: '#app',
  router: router,
  store: store
});