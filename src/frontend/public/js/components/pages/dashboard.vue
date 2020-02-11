<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Dashboard" />
    </div>
    <div class="col-md-9">
      <!-- <lineup-nav /> -->

      <div class="col-md-12">
        <events :events="eventState.events" />
      </div>
    </div>
  </div>
</template>
<script>
const lineupNav = require('./../dashboard/subComponents/lineupNav.vue')
const sideNav = require('./../dashboard/subComponents/sideNav.vue')
const events = require('./../dashboard/subComponents/events.vue')

const inputField = require('./../ui/input.vue')
const registerButton = require('./../ui/button.vue')
const { mapState } = require('vuex')

module.exports = {
  computed: {
    ...mapState({
      eventState: state => state.events
    })
  },

  created() {
    this.$store.dispatch('getUserEvents')
  },
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav,
    'events': events
  }
}
</script>
<style scoped></style>
