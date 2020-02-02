const questionService = require('./../../services/question')
const utils = require('./../../utils/index')
const state = {
  question: [],
  createquestion: {
    question: '',
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
  async createQuestion({ state, commit, payload }) {
    commit('toggleLoader', 'createquestion')
    try {
      const result = await questionService.createQuestion(state.createquestion)
      commit('toggleLoader', 'createquestion')
      commit('setMessages', {
        state: 'createquestion',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createquestion')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createquestion',
        type: 'error',
        message: errors
      })
    }
  },

  async geAllQuestion({ state, commit, payload }) {
    commit('toggleLoader', 'createquestion')
    try {
      const result = await questionService.geAllQuestion(payload)
      commit('toggleLoader', 'createquestion')
      commit('setMessages', {
        state: 'feedback',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createquestion')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createquestion',
        type: 'error',
        message: errors
      })
    }
  },

  async deleteQuestion({ state, commit, payload }) {
    commit('toggleLoader', 'createquestion')
    try {
      const result = await questionService.deleteQuestion(payload)
      commit('toggleLoader', 'createquestion')
      commit('setMessages', {
        state: 'createquestion',
        type: 'success',
        message: result.data
      })
    } catch (error) {
      commit('toggleLoader', 'createquestion')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createquestion',
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
