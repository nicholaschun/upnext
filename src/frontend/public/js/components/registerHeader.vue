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
            </li>
        </ul>
    </div>
</template>
<script>
const registerButton = require('./ui/button.vue')
module.exports =  {
 
 methods: {
     callRegister () {
         location.href="/register"
     }
 },
 components: {
     'u-button': registerButton
 }
}
</script>
<style scoped>
.register-header ul {
    list-style: none;
    padding: 0 !important;
    float:right;
}
.register-header ul li {
    display: inline-block;
}

.register-header ul li:last-child {
    margin-left: 10px;
}


</style>


