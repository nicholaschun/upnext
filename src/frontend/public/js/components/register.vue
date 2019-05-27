<template>
    <div class="register-form">
        <div class="col-md-12 no-padding">
            <div class="col-md-12 input-container no-padding">
                <div class="col-md-6 ">
                    <label for="firstname">First Name</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <u-input type="text"/> 
                    </div>
                </div>
                <div class="col-md-6 ">
                    <label for="firstname">Last Name</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <u-input type="text"/> 
                    </div>
                </div>
            </div>
            <div class="col-md-12 input-container no-padding">
                <div class="col-md-6">
                    <label for="firstname">Email</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                        <u-input type="email"/> 
                    </div>
                </div>
                <div class="col-md-6 ">
                    <label for="firstname">Organization</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <u-input type="text"/> 
                    </div>
                </div>
            </div>
            <div class="col-md-12 input-container no-padding">
                <div class="col-md-6">
                    <label for="firstname">Password</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                        <u-input type="password"/> 
                    </div>
                </div>
            </div>
            <br>
            <div class="col-md-12 input-container no-padding">
                <div class="col-md-6">
                    <div class="input-group">
                        <u-button class="default-button" :onClick="testButton">Sign Up</u-button>
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
<style scoped>
.input-group-addon{
    background-color: white !important;
    color: var(--upnext-input-addon);
}
.register-form input{
    display: block;
    border-radius: 6px;
    border:1px solid var(--upnext-input-border);
    width: 100%;
    outline: none;
}

.input-container{
    margin-top: 15px;
}
</style>


