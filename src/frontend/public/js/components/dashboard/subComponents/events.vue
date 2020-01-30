<template>
  <div>
    <event-card :events="events" />
  </div>
</template>
<script>
const eventCard = require('./eventCard.vue')

module.exports = {
  data() {
    return {
      events: [
        {
          id: 1,
          event_name: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 2,
          event_name: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 3,
          event_name: 'test event',
          view: 123,
          visible: true
        },
        {
          id: 4,
          event_name: 'test event',
          view: 123,
          visible: true
        }
      ]
    }
  },
  components: {
    'event-card': eventCard
  }
}
</script>
<style scoped></style>
