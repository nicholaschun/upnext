<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Feedback" />
    </div>
    <div class="col-md-9">
      <lineup-nav />
      <div class="col-md-12">
        <feedback-card :feedbacks="feedback" />
      </div>
    </div>
  </div>
</template>
<script>
const feedbackCard = require('./../dashboard/subComponents/feedbackCard.vue')
const lineupNav = require('./../dashboard/subComponents/lineupNav.vue')
const sideNav = require('./../dashboard/subComponents/sideNav.vue')
module.exports = {
  data() {
    return {
      feedback: [
        {
          id: 1,
          feedback: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 2,
          feedback: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 3,
          feedback: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 4,
          feedback: 'test event',
          view: 123,
          visible: true
        }
      ]
    }
  },
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav,
    'feedback-card': feedbackCard
  }
}
</script>
<style scoped></style>
