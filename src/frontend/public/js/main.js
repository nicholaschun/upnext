const Vue = require('vue/dist/vue.js')

Vue.component('testComponent', require('./components/test.vue'))

const app = new Vue({
    el: '#app'
})