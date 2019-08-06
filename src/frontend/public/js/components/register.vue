<template>
    <div class="register-form">
        <form @submit.prevent="registerUser('user_register')" data-vv-scope="user_register">
            <div class="col-md-12 no-padding">
                <div class="col-md-12 input-container no-padding">
                    <div class="col-md-6 ">
                        <label for="firstname">First Name</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <u-input 
                                type="text"
                                name="first name" 
                                v-validate="'required'"  
                                v-model="register.firstname"
                                className="form-control custom-input"/>
                        </div>
                        <small class="form-error animated fadeInUp2">{{errors.first('user_register.first name')}}</small>
                    </div>
                    <div class="col-md-6 ">
                        <label for="firstname">Last Name</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <u-input 
                                type="text" 
                                name="last name" 
                                v-validate="'required'"
                                v-model="register.lastname" 
                                className="form-control custom-input"/> 
                        </div>
                    </div>
                </div>
                <div class="col-md-12 input-container no-padding">
                    <div class="col-md-6">
                        <label for="firstname">Email</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <u-input 
                                type="email" 
                                name="email" 
                                v-validate="'required|email'"
                                v-model="register.email" 
                                className="form-control custom-input"/> 
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <label for="firstname">Organization</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <u-input 
                                type="text" 
                                name="password" 
                                v-model="register.organization" 
                                className="form-control custom-input"/> 
                        </div>
                    </div>
                </div>
                <div class="col-md-12 input-container no-padding">
                    <div class="col-md-6">
                        <label for="firstname">Password</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            <u-input 
                                type="password" 
                                v-model="register.password" 
                                v-validate="'required'"
                                name="password"
                                className="form-control custom-input"/> 
                        </div>
                    </div>
                </div>
                <br>
                <div class="col-md-12 input-container no-padding">
                    <div class="col-md-6">
                        <div class="input-group">
                            <u-button 
                                class="default-button" 
                                type="submit">
                                Sign Up
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
module.exports = {
    data () {
        return {
            register: {firstname: '',lastname: '', organization:'', password: ''}
        }
    },
    methods: {
        registerUser (scope) {
            console.log(this.$validator)
            this.$validator.validateAll(scope).then(validate => {
                console.log(validate)
            })
            console.log(this.register)
        }
    },
     components: {
     'u-input': inputField,
     'u-button': registerButton

 }
}
</script>
<style scoped>

</style>


