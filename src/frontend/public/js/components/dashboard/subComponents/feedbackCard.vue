<template>
  <div>
    <ul class="feedback-list">
      <li v-for="feedback in feedbacks" :key="feedback.id">
        {{ feedback.feedback }}
      </li>
    </ul>
  </div>
</template>
<script>
module.exports = {
  props: {
    feedbacks: Array
  }
}
</script>
<style scoped>
.feedback-list {
  list-style: none;
}

.feedback-list li {
  padding: 15px;
  border-bottom: 1px solid var(--upnext-light-ash);
}
</style>
