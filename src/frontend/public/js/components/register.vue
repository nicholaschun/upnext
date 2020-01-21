<template>
  <div class="register-form">
    <div class="col-md-12">
      <error-box
        v-if="userState.createuser.messagebox"
        :messagedata="userState.createuser.messagebox"
      />
    </div>
    <facebook-login-button />
    <google-login-button />
    <br />
    <form
      @submit.prevent="registerUser('user_register')"
      data-vv-scope="user_register"
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
                v-model="userState.createuser.firstname"
                className="form-control custom-input"
              />
            </div>
            <small class="form-error animated fadeInUp2">{{
              errors.first('user_register.first name')
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
                v-model="userState.createuser.lastname"
                className="form-control custom-input"
              />
            </div>
            <small class="form-error animated fadeInUp2">{{
              errors.first('user_register.last name')
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
                v-model="userState.createuser.email"
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
                v-model="userState.createuser.organization"
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
                v-model="userState.createuser.password"
                v-validate="'required'"
                name="password"
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
                :disabled="userState.createuser.loader"
                class="default-button"
                type="submit"
              >
                Sign Up
                <span
                  v-if="userState.createuser.loader"
                  class="fa fa-loader fa-spinner fa-spin"
                ></span>
              </u-button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const inputField = require('./ui/input.vue')
const registerButton = require('./ui/button.vue')
const facebookLoginButton = require('./ui/facebook-login-button.vue')
const googleLoginButton = require('./ui/google-login-button.vue')
const errorBox = require('./ui/errorBox.vue')
const { mapState } = require('vuex')

module.exports = {
  computed: {
    ...mapState({
      userState: state => state.users
    })
  },
  methods: {
    registerUser(scope) {
      this.$validator.validateAll(scope).then(validate => {
        if (validate) {
          this.$store.dispatch('registerUser')
        }
      })
    }
  },
  components: {
    'u-input': inputField,
    'u-button': registerButton,
    'facebook-login-button': facebookLoginButton,
    'google-login-button': googleLoginButton,
    'error-box': errorBox
  }
}
</script>
<style scoped></style>
