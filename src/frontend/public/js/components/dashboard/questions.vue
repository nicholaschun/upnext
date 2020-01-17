<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Questions" />
    </div>
    <div class="col-md-9">
      <lineup-nav />
      <div class="col-md-12">
        <question-card :questions="questions" />
      </div>
    </div>
  </div>
</template>
<script>
const lineupNav = require('./subComponents/lineupNav.vue')
const sideNav = require('./subComponents/sideNav.vue')
const questionCard = require('./subComponents/questionCard.vue')

module.exports = {
  data() {
    return {
      questions: [
        {
          id: 1,
          question: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 2,
          question: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 3,
          question: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 4,
          question: 'test event',
          view: 123,
          visible: true
        }
      ]
    }
  },
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav,
    'question-card': questionCard
  }
}
</script>
<style scoped></style>
