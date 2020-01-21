const userservice = require('./../../services/user')
const utils = require('./../../utils/index')

const state = {
  users: [],
  createuser: {
    firstname: 'Nicholas',
    lastname: 'Mamiya',
    email: 'nicholas@gmail.com',
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
  }
}

const actions = {
  async registerUser({ commit, state }) {
    commit('toggleLoader', 'createuser')
    try {
      const result = await userservice.createUser(state.createuser)
      commit('toggleLoader', 'createuser')
      commit('setMessages', {
        state: 'createuser',
        type: 'success',
        message: result.data
      })
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

  async loginUser({ commit }) {
    commit('toggleLoader', 'login')
    try {
      await userservice.loginUser(state.login)
      commit('toggleLoader', 'login')
    } catch (error) {
      console.log(error)
      const errors = error.response ? error.response.data.errors : error.message
      console.log(errors)
      commit('setErrorMessages', { state: 'login', message: errors })
      commit('toggleLoader', 'login')
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
