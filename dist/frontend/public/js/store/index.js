'use strict'

var Vue = require('vue/dist/vue.js')

var Vuex = require('vuex')

var events = require('./modules/event')

var users = require('./modules/user')

Vue.use(Vuex)
var store = new Vuex.Store({
  modules: {
    events: events,
    users: users
  }
})
module.exports = store
