const toasted = require('vue-toasted')
module.exports = {
  generateMessage(message) {
    const errors = Array.isArray(message.response.data.errors)
      ? message.response.data.errors
      : message.response.data
    return errors
  },
  toaster(){
    console.log('herere')
    toasted.show('working')
}
}
