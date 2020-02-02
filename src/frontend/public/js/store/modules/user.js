const userService = require('./../../services/user')
const utils = require('./../../utils/index')

const state = {
  users: [],
  createuser: {
    firstname: 'Nicholas',
    lastname: 'Mamiya',
    email: 'nicholaschunryne@gmail.com',
    organization: 'i5',
    password: 'cripx...',
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  },
  login: {
    email: 'nicholaschunryne@gmail.com',
    password: 'cripx...',
    loader: false,
    messagebox: {
      type: '',
      message: ''
    }
  },
  resetpassword: {
    email: 'nicholaschunryne@gmail.com',
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
  async registerUser({ commit, state }) {
    commit('toggleLoader', 'createuser')
    try {
      const result = await userService.createUser(state.createuser)
      commit('toggleLoader', 'createuser')
      commit('setMessages', {
        state: 'createuser',
        type: 'success',
        message: result.data
      })
      // commit('resetForm', 'createuser')
    } catch (error) {
      commit('toggleLoader', 'createuser')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'createuser',
        type: 'error',
        message: errors
      })
    }
  },

  async loginUser({ commit, state }) {
    commit('toggleLoader', 'login')
    try {
      const result = await userService.loginUser(state.login)
      console.log(result)
      window.location = '/dashboard'
      commit('toggleLoader', 'login')
    } catch (error) {
      console.log(error)
      commit('toggleLoader', 'login')
      const errors = utils.generateMessage(error)
      commit('setMessages', {
        state: 'login',
        type: 'error',
        message: errors
      })
    }
  },

  async sendResetPasswordLink({ commit }) {
    commit('toggleLoader', 'resetpassword')
  }
}

module.exports = {
  state,
  mutations,
  actions
}
