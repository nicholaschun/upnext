<template>
  <div>
    <u-button class="round-button" :onClick="callRegister">
      <h4>Create <br />Line-up</h4>
    </u-button>
  </div>
</template>
<script>
const registerButton = require('./ui/button.vue')
module.exports = {
  methods: {
    callRegister() {
      location.href = '/dashboard/createevent'
    }
  },
  components: {
    'u-button': registerButton
  }
}
</script>
