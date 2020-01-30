<template>
  <div>
    <ul class="question-list">
      <li v-for="question in questions" :key="question.id">
        {{ question.question }}
      </li>
    </ul>
  </div>
</template>
<script>
module.exports = {
  props: {
    questions: Array
  }
}
</script>
<style scoped>
.question-list {
  list-style: none;
}

.question-list li {
  padding: 15px;
  border-bottom: 1px solid var(--upnext-light-ash);
}
</style>
