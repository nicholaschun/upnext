<template>
  <div class="register-header">
    <ul>
      <li>
        <u-button class="default-button" :onClick="callRegister">
          Create Account
        </u-button>
      </li>
      <li>
        <u-button class="transparent-button" :onClick="testButton">
          Login
        </u-button>
        <div class="login-container animated fadeInUp2">
          <div class="show-angle-up">
            <span class="fa fa-caret-up fa-2x"></span>
          </div>
          <div class="main-form">
            <h4>Login</h4>
            <facebook-login-button />
            <google-login-button />
            <span>{{ error }}</span>
            <form
              @submit.prevent="loginUser('user_login')"
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
                    v-model="login.email"
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
                    v-model="login.password"
                    placeholder="•••••••"
                  />
                </div>
                <small class="form-error animated fadeInUp2">{{
                  errors.first('user_login.password')
                }}</small>
              </div>
              <div class="col-md-12 input-container">
                <div class="input-group">
                  <u-button class="default-button" type="submit">
                    Sign in
                  </u-button>
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

module.exports = {
  data() {
    return {
      login: { email: null, password: null },
      error: ''
    }
  },
  methods: {
    loginUser(scope) {
      this.$validator.validateAll(scope).then(validate => {
        userService
          .loginUser(this.login)
          .then(res => {
            // redirect to protected dashboard
            location.href = '/dashboard'
          })
          .catch(error => {
            console.log(error.response)
            this.error = error.response.data.message
          })
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
    'google-login-button': googleLoginButton
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
