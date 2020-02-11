<template>
  <div>
    
    <div class="col-md-6" v-for="event in events" :key="event.id" >
      <router-link to="/dashboard/viewevent">
      <div class="col-md-12 single-event">
        <div class="event-image-container"></div>
        <div class="event-caption-container">
          <h3>{{ event.event_name }}</h3>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
const eventCard = require('./eventCard.vue')

module.exports = {
  props: {
    events: Array
  }
}
</script>
<style scoped>
.single-event {
  background-color: white;
  height: 200px;
  margin: 15px;
  border: 1px solid var(--upnext-ash);
  border-radius: 8px;
  padding: 0 !important;
}

.event-image-container {
  background-color: rgb(199, 195, 195);
  height: 100px;
  padding: 0 !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.event-caption-container {
  padding: 10px;
}

.event-caption-container h3 {
  color: var(--upnext-blue);
}
</style>
