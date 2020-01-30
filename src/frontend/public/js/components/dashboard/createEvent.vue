<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Create Lineup" />
    </div>
    <div class="col-md-9">
      <lineup-nav />
      <div class="col-md-12 create-event">
        <div class="image-upload-container"></div>
        <div class="create-event-details"></div>
      </div>
    </div>
  </div>
</template>
<script>
const lineupNav = require('./subComponents/lineupNav.vue')
const sideNav = require('./subComponents/sideNav.vue')
module.exports = {
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav
  }
}
</script>
<style scoped>
.image-upload-container {
  height: 250px;
  background: red;
}

.create-event-details {
  height: 400px;
  background: var(--upnext-light-ash);
}
</style>
