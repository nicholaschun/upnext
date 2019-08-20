import passport from "passport";
import googleStrategy from "passport-google-oauth20";

import {
  createUserProfile,
  ifUserExists,
  createUser
} from "./../../../domains/user/createUser";
import keys from "./../../../../../config/keys";

passport.use(
  new googleStrategy.Strategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      //check if the user already exists and return it
      const result = await ifUserExists(profile.emails[0].value);
      if (!result) {
        const userBody = {
          sub_id: profile.id,
          email: profile.emails[0].value,
          password: profile.id,
          loginProvider: 1,
          status: 1,
          verified: 1
        };
        const userProfile = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          profile: profile.photos[0].value
        };
        const user = await createUser(userBody);
        userProfile.user_id = user.id;
        const userP = await createUserProfile(userProfile);
        const userData = {
          id: user.id,
          email: user.email,
          dp: userP.profile,
          user: userP.first_name
        };
        return done(null, userData);
      } else {
        const resultData = {
          id: result.id,
          email: result.email,
          dp: result.UserProfile.profile,
          user: result.UserProfile.first_name
        };
        return done(null, resultData);
      }
    }
  )
);
