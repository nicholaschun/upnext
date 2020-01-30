import passport from 'passport'
import { validate } from './../utils/validate'
import { createUser, createUserProfile, ifUserExists } from '../domains/user'
import { issueToken } from './../app/auth/jwt/issueToken'

module.exports = {
  async createUser(req, res, next) {
    try {
      validate(req, res)
      const check = await ifUserExists(req.body.email)
      if (check) {
        return res
          .status(401)
          .json({ msg: 'User already exists login to continue your session' })
      }
      const body = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        organization: req.body.organization,
        profile: '',
        status: 0,
        verified: 0,
        loginProvider: 3
      }
      const user = await createUser(body)
      const data = {
        id: user.id,
        profile: body
      }
      await createUserProfile(data)
      return res.json({
        data: user,
        msg:
          'Account created succusfully. Check your email to verify your account'
      })
    } catch (error) {
      console.log(error)
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
  tokenLogin(req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info.message
        })
      }
      req.logIn(user, { session: false }, err => {
        if (err) {
          return res.status(400).json({
            message: 'Something went wrong. Try again'
          })
        }
        //generate a signed token for the user
        const body = { iq: user.id, ie: user.email }
        const token = issueToken(body)
        return res.json({ token: token })
      })
    })(req, res, next)
  },
  async sendPasswordEmail(req, res) {
    try {
      validate(req, res)
      res.json(req.body)
      const { email } = req.body
    } catch (error) {
      console.log(error)
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
  logoutUser(req, res) {
    req.logout()
    return res.redirect('/')
    // res.send('logout user')
  }
}
