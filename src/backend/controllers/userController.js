import passport from 'passport'
import { validate } from './../utils/validate'
import {
  createUser,
  createUserProfile,
  ifUserExists,
  editUserProfile
} from '../domains/user'
import { issueToken } from './../app/auth/jwt/issueToken'

module.exports = {
  async createUser(req, res) {
    try {
      validate(req, res)
      const check = await ifUserExists(req.body.email)
      if (check) {
        return res
          .status(401)
          .json('User already exists login to continue your session')
      }
      const body = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        organization: req.body.organization,
        profile: '',
        status: 0,
        verified: 0,
        loginProvider: 3
      }
      const user = await createUser(body)
      const data = {
        id: user.user_id,
        profile: body
      }
      await createUserProfile(data)
      return res.json(user)
    } catch (error) {
      return res.json(error)
    }
  },
  loginUser(req, res, next) {
    try {
      validate(req, res)
      passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
          return res.status(400).send(info)
        }
        // const userBody = { id: user.id, email: user.email }
        req.logIn(user, err => {
          // res.send('logged in')
          console.log(req.user)
          res.json(req.user)
        })
      })(req, res, next)
    } catch (error) {
      console.log(error)
    }
  },

  async tokenLogin(req, res, next) {
    try {
      validate(req, res)
      passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
          return res.status(400).json(info.msg)
        }
        req.logIn(user, { session: false }, err => {
          if (err) {
            return res.status(400).json('Something went wrong. Try again')
          }
          //generate a signed token for the user
          const body = {
            user_id: user.user_id,
            email: user.email,
            first_name: user.UserProfile.first_name,
            last_name: user.UserProfile.last_name,
            organization: user.UserProfile.organization,
            profile: user.UserProfile.profile,
            status: user.status,
            verified: user.verified
          }
          const token = issueToken(body)
          return res.json({ token: token, user: body })
        })
      })(req, res, next)
    } catch (error) {
      return res.json(error)
    }
  },

  authUser(req, res) {
    res.json(req.user.user.data)
  },

  async sendPasswordEmail(req, res) {
    try {
      validate(req, res)
      res.json(req.body)
      const { email } = req.body
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  },
  resetPassword(req, res) {
    try {
      validate(req, res)
      res.json(req.body)
      const { token, newPassword, confirmPassword } = req.body
    } catch (error) {
      console.log(error)
    }
  },
  async editUser(req, res) {
    try {
      validate(req, res)
      const result = await editUserProfile(req.body, req.params.user_id)
      return res.json(result)
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  logoutUser(req, res) {
    req.logout()
    return res.redirect('/')
    // res.send('logout user')
  }
}
