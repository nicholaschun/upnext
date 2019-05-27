const Vue = require('vue/dist/vue.js')

Vue.component('testComponent', require('./components/test.vue'))
Vue.component('searchComponent', require('./components/search.vue'))
Vue.component('registerHeaderComponent', require('./components/registerHeader.vue'))
Vue.component('createLineupComponent', require('./components/createLineupButton.vue'))
Vue.component('registerComponent', require('./components/register.vue'))

/* Dashboard components */
Vue.component('createEventComponent', require('./components/dashboard/createEvent.vue'))
Vue.component('dashboardComponent', require('./components/dashboard/dashboard.vue'))
Vue.component('lineupComponent', require('./components/dashboard/lineup.vue'))
Vue.component('editLineupComponent', require('./components/dashboard/editLineup.vue'))
Vue.component('feedbackComponent', require('./components/dashboard/feedback.vue'))
Vue.component('questionsComponent', require('./components/dashboard/questions.vue'))
Vue.component('profileComponent', require('./components/dashboard/profile.vue'))

const app = new Vue({
    el: '#app'
})