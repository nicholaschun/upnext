<template>
  <div>
    <div class="col-md-6" v-for="event in events" :key="event.id">
      <div class="col-md-12 single-event">
        <div class="event-image-container"></div>
        <div class="event-caption-container"></div>
      </div>
    </div>
  </div>
</template>
<script>
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
  border-radius: 6px;
  padding: 0 !important;
}

.event-image-container {
  background-color: rgb(199, 195, 195);
  height: 100px;
  padding: 0 !important;
}
</style>
