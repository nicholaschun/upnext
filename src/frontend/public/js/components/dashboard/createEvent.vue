<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Create Lineup" />
    </div>
    <div class="col-md-9">
      <!-- <lineup-nav /> -->
      <form
        @submit.prevent="createEvent('create_event')"
        data-vv-scope="create_event"
      >
        <div class="col-md-12 create-event">
          <div class="image-upload-container cover-image" @click="openImage">
            <input
              type="file"
              @change="loadImage"
              accept="image/*"
              style="display: none"
              ref="imageInput"
            />
            <img :src="imageUrl" class="img-responsive" alt="" />

            <div class="edit-image-overlay">
              <div class="edit-camera-image">
                <span
                  ><img
                    src="../../../img/photo-camera.svg"
                    width="30px"
                    height="30px"
                    alt=""
                    style="margin-top: 80px"/></span
                ><br />
                <span style="text-align:center;color: white;font-size: .8em"
                  >Click to select image <br /><small
                    >( 1920 × 250* )</small
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="create-event-details">
          <div class="col-md-12" style="margin-top: 30px;">
            <div class="col-md-6">
              <label for="Event name">Event Name</label>
              <u-input
                name="event name"
                v-validate="'required'"
                className="form-control custom-input"
                type="text"
                v-model="events.createevent.event_name"
              />
            </div>
            <small class="form-error animated fadeInUp2">{{
              errors.first('create_event.event name')
            }}</small>

            <div class="col-md-6">
              <label for="Event name">Event Days</label>
              <u-input
                name="event days"
                className="form-control custom-input"
                type="text"
                v-model="events.createevent.event_days"
              />
            </div>
          </div>

          <div class="col-md-12" style="margin-top: 20px;">
            <div class="col-md-12">
              <label for="Event name">Event Description</label>
              <u-input
                name="event description"
                className="form-control custom-input"
                type="text"
                v-model="events.createevent.description"
              />
            </div>
          </div>
          <div class="col-md-12" style="margin-top: 20px;">
            <div class="col-md-4">
              <u-button
                :class="{
                  'default-button': events.createevent.has_feedback,
                  'question-button': !events.createevent.has_feedback
                }"
                type="button"
                @click.native="$store.dispatch('toggleButton', 'has_feedback')"
              >
                Collect Feedback
              </u-button>
            </div>
            <div class="col-md-4">
              <u-button
                type="button"
                @click.native="$store.dispatch('toggleButton', 'has_questions')"
                :class="{
                  'default-button': events.createevent.has_questions,
                  'question-button': !events.createevent.has_questions
                }"
              >
                Collect Questions
              </u-button>
            </div>
          </div>
          <div class="col-md-12" style="margin-top: 20px;">
            <div class="col-md-5">
              <u-button
                class="default-button"
                type="submit"
                :disabled="events.createevent.loader"
              >
                Continue
              </u-button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
const lineupNav = require('./subComponents/lineupNav.vue')
const sideNav = require('./subComponents/sideNav.vue')
const inputField = require('./../ui/input.vue')
const registerButton = require('./../ui/button.vue')

// const errorBox = require('./ui/errorBox.vue')

const { mapState } = require('vuex')

module.exports = {
  data() {
    return {
      imageUrl: null,
      file: ''
    }
  },
  computed: {
    ...mapState({
      events: state => state.events
    })
  },
  methods: {
    openImage() {
      this.$refs.imageInput.click()
    },
    loadImage(event) {
      let file = event.target.files[0]
      this.file = event.target.files[0]
      if (file.size > 2000000) {
        alert('Event image cannot be more than 2MB')
      } else {
        let reader = new FileReader()
        reader.onload = e => {
          this.imageUrl = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    createEvent(scope) {
      this.$validator.validateAll(scope).then(validate => {
        if (validate) {
          this.$store.dispatch('createEvent', this.file)
        }
      })
    },
    toggleButton(type) {}
  },
  components: {
    'lineup-nav': lineupNav,
    'side-nav': sideNav,
    'u-input': inputField,
    'u-button': registerButton
  }
}
</script>
<style scoped>
.image-upload-container {
  height: 250px;
  background: rgb(78, 75, 75);
}

.create-event-details {
  padding: 5% 0 10% 0;
}
.image-upload-container {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.create-event-details {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.edit-image-overlay {
  background: rgba(102, 102, 102, 0.233);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.cover-image {
  padding: 0 !important;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cover-image img {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  vertical-align: middle;
}
</style>
