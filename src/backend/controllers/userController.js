import {validationResult} from 'express-validator'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

import {validate} from './../utils/validate'
import db from './../database/models/index'

module.exports = {

   async createUser(req, res, next){
       try {
          validate(req, res)
          const {firstName, lastName, email, organization, password} = req.body
          const verifyToken = crypto.createHash('sha256').update(email).digest('hex')

          const user = await db.User.create({
              email : email,
              status : 0,
              verified: 0,
              verify_token: verifyToken,
              login_provider: 1,
              password : bcrypt.hashSync(password, 10)
          })
          const profile = await db.UserProfile.create({
              user_id: user.id,
              first_name: firstName,
              last_name: lastName,
              full_name: `${firstName} ${lastName}`,
              organization: organization
          })
          res.json(user)
       } catch (error) {
           console.log(error)
       }
    },
     async loginUser(req, res, next){
        try {
            validate(req, res)
            res.json(req.body)
            const {email, password} = req.body
        } catch (error) {
            console.log(error)
        }
    },
    async verifyUser(req, res){
        res.send('verify user')
    },

    async sendPasswordEmail(req, res){
        try {
            validate(req, res)
            res.json(req.body)
            const {email} = req.body
        } catch (error) {
            console.log(error)
        }
    },
    resetPassword(req, res){
        try {
            validate(req, res)
            res.json(req.body)
            const {token, newPassword, confirmPassword} = req.body
        } catch (error) {
            console.log(error)
        }
    },
    logoutUser(req, res){
        res.send('logout user')
    }
}