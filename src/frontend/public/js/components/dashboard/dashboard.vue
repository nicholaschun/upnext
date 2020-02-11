<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Dashboard" />
    </div>
    <div class="col-md-9">
      <lineup-nav />
      <div class="col-md-12">
        <events :events="eventState.events" />
      </div>
    </div>
  </div>
</template>

<script>
const lineupNav = require('./subComponents/lineupNav.vue')
const sideNav = require('./subComponents/sideNav.vue')
const events = require('./subComponents/events.vue')
const {mapState} = require('vuex')

module.exports = {

  computed: {
    ...mapState({
      eventState: state => state.events
    })
  },

  created() {
    console.log('users')
    this.$store.dispatch('getUserEvents')
  },
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav,
    events: events
  }
}
</script>
<style scoped></style>
