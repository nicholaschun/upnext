import passport from 'passport'
import { validate } from './../utils/validate'
import {
  createUser,
  createUserProfile,
  ifUserExists,
  editUserProfile
} from '../domains/user'
import { verifyIdToken } from './../domains/user/googleAuth'
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
        profile:
          'https://upnextresources.s3-eu-west-1.amazonaws.com/default_profile.jpg',
        status: 1,
        verified: 1,
        sub_id: null,
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
      await editUserProfile(req.body, req.params.user_id)
      const token = issueToken(req.body)
      return res.json({ token: token, user: req.body })
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  logoutUser(req, res) {
    req.logout()
    return res.redirect('/')
    // res.send('logout user')
  },
  async loginWithGoogle(req, res) {
    const payload = req.body
    try {
      // const result = await verifyIdToken(req.body.idToken)

      //check if the user already exists.
      const user = await ifUserExists(payload.email)
      if (user) {
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
      }

      // Register a new user and generate a jwt
      const body = {
        email: payload.email,
        password: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        organization: null,
        profile: payload.profile,
        status: 1,
        verified: 1,
        sub_id: payload.id,
        loginProvider: 2
      }
      const newUser = await createUser(body)
      const data = {
        id: newUser.user_id,
        profile: body
      }
      await createUserProfile(data)
      const returneduser = {
        email: payload.email,
        firstName: payload.first_name,
        lastName: payload.last_name,
        organization: null,
        profile: payload.profile,
        status: 1,
        verified: 1,
        sub_id: payload.id,
        loginProvider: 2
      }
      const token = issueToken(returneduser)
      return res.json({ token: token, user: returneduser })
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  async loginWithFacebook(req, res) {
    try {
      //check if the user already exists.
      const userData = req.body
      const user = await ifUserExists(userData.email)
      if (user) {
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
      }

      // Register a new user and generate a jwt
      const body = {
        email: userData.email,
        password: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        organization: null,
        profile: userData.profile,
        status: 1,
        verified: 1,
        sub_id: userData.id,
        loginProvider: 2
      }
      const newUser = await createUser(body)
      const data = {
        id: newUser.user_id,
        profile: body
      }
      await createUserProfile(data)
      const returneduser = {
        user_id: newUser.user_id,
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name,
        organization: null,
        profile: userData.profile,
        status: 1,
        verified: 1,
        sub_id: userData.id,
        loginProvider: 2
      }
      const token = issueToken(returneduser)
      return res.json({ token: token, user: returneduser })
    } catch (error) {
      return res.json(error)
    }
  }
}
