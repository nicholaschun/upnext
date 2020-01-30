<template>
  <div>
    <div
      class="alert alert-danger custom-error"
      role="alert"
      v-if="messagedata.type == 'error'"
    >
      <ul>
        <span v-if="Array.isArray(messagedata.message)">
          <li v-for="(msg, index) in messagedata.message" :key="index">
            {{ msg.msg }}
          </li>
        </span>
        <span v-else>
          <li>{{ messagedata.message.msg }}</li>
        </span>
      </ul>
    </div>
    <div
      class="alert alert-success custom-error"
      role="alert"
      v-if="messagedata.type == 'success'"
    >
      <ul>
        <span>
          <li>{{ messagedata.message.msg }}</li>
        </span>
      </ul>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: {
    messagedata: {
      required: true,
      default: ''
    }
  }
}
</script>
<style scoped>
.custom-error {
  margin-top: 10px;
  transition: 0.3s;
  font-size: 0.9em;
}
</style>
