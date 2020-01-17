const Vue = require('vue/dist/vue.js')
const Vuex = require('vuex')
const events = require('./modules/event')
const users = require('./modules/user')

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    events,
    users
  }
})

module.exports = store
