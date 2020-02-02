const eventService = require('./../../services/events')
const utils = require('./../../utils/index')
const state = {
  events: [],
  createevent: {
    event_id: null,
    event_name: 'Sample event',
    event_days: 2,
    event_category: 'new',
    event_status: '1',
    has_feedback: true,
    has_questions: true,
    event_url: 'null',
    url_snippet: 'dexup',
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
  toggleLoader(state, object) {
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
  }
}

const actions = {
  async createEvent({ state, commit }) {
    commit('toggleLoader', 'createevent')
    try {
      const result = await eventService.createEvent(state.createevent)
      commit('toggleLoader', 'createevent')
      commit('setMessages', {
        state: 'createevent',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createevent')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createvent',
        type: 'error',
        message: errors
      })
    }
  },

  async geAllEvents({ state, commit }) {
    commit('toggleLoader', 'getevents')
    try {
      const result = await eventService.geAllEvents(state.createevent)
      commit('toggleLoader', 'getevents')
      commit('setMessages', {
        state: 'events',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  },

  async geOneEvent({ state, commit }) {
    commit('toggleLoader', 'getevents')
    try {
      const result = await eventService.geOneEvents(state.createevent.event_id)
      commit('toggleLoader', 'getevents')
      commit('setMessages', {
        state: 'events',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  },

  async editEvents({ state, commit }) {
    commit('toggleLoader', 'createevent')
    try {
      const result = await eventService.editEvents(
        state.createevent.event_id,
        state.createevent
      )
      commit('toggleLoader', 'createevent')
      commit('setMessages', {
        state: 'createevent',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createevent')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createvent',
        type: 'error',
        message: errors
      })
    }
  },

  async publishEvent({ state, commit }) {
    commit('toggleLoader', 'getevents')
    try {
      const result = await eventService.publishEvent(state.createevent.event_id)
      commit('toggleLoader', 'getevents')
      commit('setMessages', {
        state: 'getevents',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  },

  async deleteEvent({ state, commit }) {
    commit('toggleLoader', 'getevents')
    try {
      const result = await eventService.deleteEvent(state.createevent.event_id)
      commit('toggleLoader', 'getevents')
      commit('setMessages', {
        state: 'getevents',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'getevents')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'getevents',
        type: 'error',
        message: errors
      })
    }
  }
}

module.exports = {
  state,
  mutations,
  actions
}
