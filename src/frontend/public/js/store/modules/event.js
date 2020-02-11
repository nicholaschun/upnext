const eventService = require('./../../services/events')
const utils = require('./../../utils/index')
const state = {
  events: null,
  createevent: {
    event_id: null,
    event_name: 'Sample event',
    event_days: '2',
    event_category: 'new',
    event_status: '1',
    has_feedback: true,
    has_questions: false,
    event_url: 'null',
    url_snippet: 'dexup',
    event_image: null,
    additional_info: 'new mc to be announced',
    loader: false,
    description: 'a new description',
    messagebox: {
      type: '',
      message: ''
    }
  },
  getevents: {
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  }
}

const mutations = {
  toggleEventLoader(state, object) {
    state[object]['loader']
      ? (state[object]['loader'] = false)
      : (state[object]['loader'] = true)
  },
  setMessages(state, data) {
    state[data.state]['messagebox'].message = data.message
    state[data.state]['messagebox'].type = data.type
  },
  resetForm(state, object) {
    Object.keys(state[object]).forEach(key => {
      state[object][key] = null
    })
  },
  setEvents(state, data) {
    state.events = data
  },
  changeEventImage(state, file) {
    state.createevent.event_image = file
  },
  toggleButton(state, type) {
    state.createevent[type]
      ? (state.createevent[type] = false)
      : (state.createevent[type] = true)
  }
}

const actions = {
  async createEvent({ state, commit, payload }) {
    commit('toggleEventLoader', 'createevent')
    try {
      await eventService.createEvent(state.createevent)
      commit('toggleEventLoader', 'createevent')
      // this._vm.$toasted.show('working')
      // utils.toaster()
      // commit('setMessages', {
      //   state: 'createevent',
      //   type: 'success',
      //   message: result.data
      // })
    } catch (error) {
      commit('toggleEventLoader', 'createevent')
      console.log(error)
      // const errors = utils.generateMessage(error)
      // commit('setMessages', {
      //   state: 'createvent',
      //   type: 'error',
      //   message: errors
      // })
    }
  },

  async geAllEvents({ state, commit }) {
    commit('toggleEventLoader', 'getevents')
    try {
      const result = await eventService.geAllEvents(state.createevent)
      console.log(result)
      commit('toggleEventLoader', 'getevents')
      // commit('setEventMessages', {
      //   state: 'events',
      //   type: 'success',
      //   message: result.data
      // })
    } catch (error) {
      commit('toggleEventLoader', 'getevents')
      // const errors = utils.generateMessage(error)
      // commit('setMessages', {
      //   state: 'getevents',
      //   type: 'error',
      //   message: errors
      // })
    }
  },

  async geOneEvent({ state, commit }) {
    commit('toggleEventLoader', 'getevents')
    try {
      const result = await eventService.geOneEvents(state.createevent.event_id)
      commit('toggleEventLoader', 'getevents')
      commit('setMessages', {
        state: 'events',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      console.log(error)
      commit('toggleEventLoader', 'getevents')
      // const errors = utils.generateMessage(error)
      // commit('setMessages', {
      //   state: 'getevents',
      //   type: 'error',
      //   message: errors
      // })
    }
  },

  async getUserEvents({ commit, rootState }) {
    commit('toggleEventLoader', 'getevents')
    try {
      const result = await eventService.getUserEvents(
        rootState.users.createuser.user_id
      )
      commit('setEvents', result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
      commit('toggleEventLoader', 'getevents')
      // const errors = utils.generateMessage(error)
      // commit('setMessages', {
      //   state: 'getevents',
      //   type: 'error',
      //   message: errors
      // })
    }
  },

  async editEvents({ state, commit }) {
    commit('toggleEventLoader', 'createevent')
    try {
      const result = await eventService.editEvents(
        state.createevent.event_id,
        state.createevent
      )
      commit('toggleEventLoader', 'createevent')
      commit('setMessages', {
        state: 'createevent',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleEventLoader', 'createevent')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createvent',
        type: 'error',
        message: errors
      })
    }
  },

  async publishEvent({ state, commit }) {
    commit('toggleEventLoader', 'getevents')
    try {
      const result = await eventService.publishEvent(state.createevent.event_id)
      commit('toggleLoader', 'getevents')
      commit('setMessages', {
        state: 'getevents',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleEventLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  },

  async deleteEvent({ state, commit }) {
    commit('toggleEventLoader', 'getevents')
    try {
      const result = await eventService.deleteEvent(state.createevent.event_id)
      commit('toggleEventLoader', 'getevents')
      commit('setMessages', {
        state: 'getevents',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleEventLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  },

  updateEventImage({ commit }, payload) {
    commit('changeEventImage', payload)
  },

  toggleButton({ commit },payload) {
    commit('toggleButton', payload)
  }
}

module.exports = {
  state,
  mutations,
  actions
}
