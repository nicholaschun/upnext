<template>
    <div class="register-form">
        <div class="col-md-12 no-padding">
            <div class="col-md-12 input-container no-padding">
                    <label for="firstname">Email</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                        <u-input type="email" placeholder="Enter your email address"/> 
                    </div>
            </div>
            <br>
            <div class="col-md-12 input-container no-padding">
                <div class="col-md-6 no-padding">
                    <div class="input-group">
                        <u-button class="default-button" :onClick="testButton">Reset Password</u-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const inputField = require('./ui/input.vue')
const registerButton = require('./ui/button.vue')
module.exports = {
     components: {
     'u-input': inputField,
     'u-button': registerButton

 }
}
</script>
