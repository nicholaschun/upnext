module.exports = {
    generateMessage(message) {
      const errors = Array.isArray(message.response.data.errors)
        ? message.response.data.errors
        : message.response.data
      return errors
    },

    toaster(){
        this.$toasted.show('working')
    }
  }