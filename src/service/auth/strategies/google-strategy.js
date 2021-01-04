import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'

import {
  createUserProfile,
  ifUserExists,
  createUser
} from '../../../domains/user'
import dotenv from 'dotenv'
dotenv.config()

export default () => {
  passport.use(
    new googleStrategy.Strategy(
      {
        clientID: process.env.google_client_id,
        clientSecret: process.env.google_secret,
        callbackURL: process.env.google_callback
      },
      async (accessToken, refreshToken, profile, done) => {
        //check if the user already exists and return it
        const result = await ifUserExists(profile.emails[0].value)
        if (!result) {
          const userBody = {
            sub_id: profile.id,
            email: profile.emails[0].value,
            password: profile.id,
            loginProvider: 1,
            status: 1,
            verified: 1
          }
          let profile_image = profile.photos[0].value
          const userProfile = {
            profile: {
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
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
}
