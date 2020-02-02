const feedbackService = require('./../../services/feedback')
const utils = require('./../../utils/index')
const state = {
  feedback: [],
  createfeedback: {
    feedback: '',
    email: '',
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
  async createFeedback({ state, commit, payload }) {
    commit('toggleLoader', 'createfeedback')
    try {
      const result = await feedbackService.createFeedback(payload)
      commit('toggleLoader', 'createfeedback')
      commit('setMessages', {
        state: 'createfeedback',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createfeedback')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createfeedback',
        type: 'error',
        message: errors
      })
    }
  },

  async geAllFeedback({ state, commit, payload }) {
    commit('toggleLoader', 'createfeedback')
    try {
      const result = await feedbackService.geAllFeedback(payload)
      commit('toggleLoader', 'createfeedback')
      commit('setMessages', {
        state: 'feedback',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createfeedback')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createfeedback',
        type: 'error',
        message: errors
      })
    }
  },

  async deleteFeedback({ state, commit, payload }) {
    commit('toggleLoader', 'createfeedback')
    try {
      const result = await feedbackService.deleteFeedback(payload)
      commit('toggleLoader', 'createfeedback')
      commit('setMessages', {
        state: 'createfeedback',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createfeedback')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createfeedback',
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
