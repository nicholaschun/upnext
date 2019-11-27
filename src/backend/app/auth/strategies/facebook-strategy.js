import passport from 'passport'
import facebookStrategy from 'passport-facebook'

import {
  createUserProfile,
  ifUserExists,
  createUser
} from '../../../domains/user'
import { config } from 'dotenv'

passport.use(
  new facebookStrategy.Strategy(
    {
      clientID: config().parsed.facebook_client_id,
      clientSecret: config().parsed.facebook_secret,
      callbackURL: config().parsed.facebook_callback,
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      //check if the user already exists and return it
      const result = await ifUserExists(profile.emails[0].value)
      if (!result) {
        const userBody = {
          sub_id: profile.id,
          email: profile.emails[0].value,
          password: profile.id,
          loginProvider: 2,
          status: 1,
          verified: 1
        }
        let fullname = profile.displayName.split(' ')
        let profile_image = profile.photos[0].value
        const userProfile = {
          profile: {
            firstName: fullname[0],
            lastName: fullname[1],
            profile: profile_image
          }
        }
        const user = await createUser(userBody)
        userProfile.id = user.id
        const userP = await createUserProfile(userProfile)
        const userData = {
          id: user.id,
          email: user.email,
          dp: userP.profile,
          user: userP.first_name
        }
        return done(null, userData)
      } else {
        const resultData = {
          id: result.id,
          email: result.email,
          dp: result.UserProfile.profile,
          user: result.UserProfile.first_name
        }
        return done(null, resultData)
      }
    }
  )
)
