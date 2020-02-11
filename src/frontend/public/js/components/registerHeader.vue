<template>
  <div class="register-header">
    <ul>
      <li>
        <u-button class="default-button" type="button" @click.native="callRegister">
          Create Account
        </u-button>
      </li>
      <li>
        <span style="color:white;" class="transparent-button" type="button">
          Login
        </span>
        <div class="login-container animated fadeInUp2">
          <div class="show-angle-up">
            <span class="fa fa-caret-up fa-2x"></span>
          </div>
          <div class="main-form">
            <h4>Login</h4>
            <div class="col-md-12">
              <error-box
                v-if="loginState.login.messagebox"
                :messagedata="loginState.login.messagebox"
              />
            </div>
            <facebook-login-button />
            <google-login-button />
            <form
              @submit.prevent="loginUser('user_loginn')"
              auto-complete="off"
              data-vv-scope="user_login"
              autocomplete="off"
            >
              <div class="col-md-12 input-container">
                <label for="Email">Email</label>
                <div class="">
                  <!-- <span class="input-group-addon"
                    ><i class="fa fa-envelope"></i
                  ></span> -->
                  <u-input
                    type="email"
                    name="email"
                    v-model="loginState.login.email"
                    v-validate="'required|email'"
                    className="form-control custom-input"
                    placeholder="kofi@example.com"
                  />
                </div>
                <small class="form-error animated fadeInUp2">{{
                  errors.first('user_login.email')
                }}</small>
              </div>

              <div class="col-md-12 input-container">
                <label for="Email">Password</label>
                <div class="">
                  <!-- <span class="input-group-addon"
                    ><i class="fa fa-key"></i
                  ></span> -->
                  <u-input
                    name="password"
                    v-validate="'required'"
                    className="form-control custom-input"
                    type="password"
                    v-model="loginState.login.password"
                    placeholder="•••••••"
                  />
                </div>
                <small class="form-error animated fadeInUp2">{{
                  errors.first('user_login.password')
                }}</small>
              </div>
              <div class="col-md-12 input-container">
                <div class="input-group">
                  <!-- <u-button
                    class="default-button"
                    type="submit"
                    :disabled="loginState.login.loader"
                  >
                    Sign in
                    <span
                      v-if="loginState.login.loader"
                      class="fa fa-loader fa-spinner fa-spin"
                    ></span>
                  </u-button> -->
                </div>
              </div>
            </form>
            <div class="col-md-12 recover-text">
              <a href="/resetpassword">Lost your password?</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
const registerButton = require('./ui/button.vue')
const inputField = require('./ui/input.vue')
const userService = require('./../services/user')
const facebookLoginButton = require('./ui/facebook-login-button.vue')
const googleLoginButton = require('./ui/google-login-button.vue')
const errorBox = require('./ui/errorBox.vue')

const { mapState } = require('vuex')
module.exports = {
  computed: {
    ...mapState({
      loginState: state => state.users
    })
  },
  methods: {
    loginUser(scope) {
      this.$validator.validateAll(scope).then(validate => {
        if (validate) {
          this.$store.dispatch('loginUser')
        }
      })
    },
    callRegister() {
      location.href = '/register'
    }
  },
  components: {
    'u-button': registerButton,
    'u-input': inputField,
    'facebook-login-button': facebookLoginButton,
    'google-login-button': googleLoginButton,
    'error-box': errorBox
  }
}
</script>
<style scoped>
.register-header ul {
  list-style: none;
  padding: 0 !important;
  float: right;
}
.register-header ul li {
  display: inline-block;
}

.register-header ul li:last-child {
  margin-left: 10px;
}

.register-header ul li:last-child:hover .login-container {
  display: block;
}

.login-container {
  position: absolute;
  width: 300px;
  border-radius: 5px;
  background: #ffffff;
  top: 78%;
  padding: 15px 8px 25px 8px;
  right: 10px;
  display: none;
  z-index: 10;
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
}
.show-angle-up {
  position: absolute;
  top: -15px;
  color: white;
  right: 10px;
}
.show-angle-up span {
  width: 30px;
  height: 50px;
}
.main-form h4 {
  color: var(--upnext-blue);
  font-weight: bold;
  margin-left: 15px;
}

.recover-text {
  margin-top: 10px;
}
.recover-text a {
  color: #2e2e2e !important;
  cursor: pointer;
  font-size: 0.8em !important;
}
</style>
