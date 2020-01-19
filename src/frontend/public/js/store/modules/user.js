const userservice = require('./../../services/events')

const state = {
  users: [],
  createuser: {
    firstname: 'Nicholas',
    lastname: 'Mamiya',
    email: 'nicholas@gmail.com',
    organization: 'i5',
    password: 'cripx...',
    loader: false,
    erros: ''
  },
  login: {
    email: 'nicholaschunryne@gmail.com',
    password: 'cripx...',
    loader: false,
    erros: ''
  },
  resetpassword: {
    email: 'nicholaschunryne@gmail.com',
    loader: false,
    errors: ''
  }
}

const mutations = {
  toggleLoader(state, object) {
    state[object]['loader']
      ? (state[object]['loader'] = false)
      : (state[object]['loader'] = true)
  }
}

const actions = {
  async registerUser({ commit }) {
    commit('toggleLoader', 'createuser')
  },

  async loginUser({ commit }) {
    commit('toggleLoader', 'login')
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
