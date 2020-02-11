<template>
  <div>
    <div class="col-md-3">
      <side-nav title="Profile" />
    </div>
    <div class="col-md-9">
      <!-- <lineup-nav /> -->
      <div class="col-md-12">
        <h4>Edit Profile</h4>
      </div>
      <form
        @submit.prevent="updateUser('user_update')"
        data-vv-scope="user_update"
      >
        <div class="col-md-12 no-padding">
          <div class="col-md-12 input-container no-padding">
            <div class="col-md-6">
              <label for="firstname">First Name <span>*</span></label>
              <div class="">
                <!-- <span class="input-group-addon"><i class="fa fa-user"></i></span> -->
                <u-input
                  type="text"
                  name="first name"
                  v-validate="'required'"
                  v-model="profile.createuser.firstname"
                  className="form-control custom-input"
                />
              </div>
              <small class="form-error animated fadeInUp2">{{
                errors.first('user_update.first name')
              }}</small>
            </div>
            <div class="col-md-6 ">
              <label for="firstname">Last Name <span>*</span></label>
              <div class="">
                <!-- <span class="input-group-addon"><i class="fa fa-user"></i></span> -->
                <u-input
                  type="text"
                  name="last name"
                  v-validate="'required'"
                  v-model="profile.createuser.lastname"
                  className="form-control custom-input"
                />
              </div>
              <small class="form-error animated fadeInUp2">{{
                errors.first('user_update.last name')
              }}</small>
            </div>
          </div>
          <div class="col-md-12 input-container no-padding">
            <div class="col-md-6">
              <label for="firstname">Email <span>*</span></label>
              <div class="">
                <!-- <span class="input-group-addon"
                ><i class="fa fa-envelope"></i
              ></span> -->
                <u-input
                  type="email"
                  name="email"
                  v-validate="'required|email'"
                  disabled="disabled"
                  v-model="profile.createuser.email"
                  className="form-control custom-input"
                />
              </div>
              <small class="form-error animated fadeInUp2">{{
                errors.first('user_register.email')
              }}</small>
            </div>
            <div class="col-md-6 ">
              <label for="firstname">Organization</label>
              <div class="">
                <!-- <span class="input-group-addon"><i class="fa fa-user"></i></span> -->
                <u-input
                  type="text"
                  name="password"
                  v-model="profile.createuser.organization"
                  className="form-control custom-input"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 input-container no-padding">
            <div class="col-md-6">
              <label for="firstname">Password <span>*</span></label>
              <div class="">
                <!-- <span class="input-group-addon"><i class="fa fa-key"></i></span> -->
                <u-input
                  type="password"
                  v-model="profile.createuser.password"
                  v-validate="'required'"
                  name="password"
                  disabled="disabled"
                  className="form-control custom-input"
                />
              </div>
              <small class="form-error animated fadeInUp2">{{
                errors.first('user_register.password')
              }}</small>
            </div>
          </div>
          <br />
          <div class="col-md-12 input-container no-padding">
            <div class="col-md-6">
              <div class="input-group">
                <u-button
                  :disabled="profile.createuser.loader"
                  class="default-button"
                  type="submit"
                >
                  Save
                  <span
                    v-if="profile.createuser.loader"
                    class="fa fa-loader fa-spinner fa-spin"
                  ></span>
                </u-button>
              </div>
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
const { mapState } = require('vuex')
module.exports = {
  computed: {
    ...mapState({
      profile: state => state.users
    })
  },

  methods: {
    updateUser(scope) {
      this.$validator.validateAll(scope).then(validate => {
        if (validate) {
          this.$store.dispatch('updateUser')
        }
      })
    }
  },
  components: {
    'u-input': inputField,
    'u-button': registerButton,
    'lineup-nav': lineupNav,
    'side-nav': sideNav
  }
}
</script>
<style scoped>
h4 {
  color: var(--upnext-blue);
}
</style>
