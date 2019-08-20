import passport from "passport";
import facebookStrategy from "passport-facebook";

import {
  createUserProfile,
  ifUserExists,
  createUser
} from "./../../../domains/user/createUser";
import keys from "./../../../../../config/keys";

passport.use(
  new facebookStrategy.Strategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "/auth/facebook/redirect",
      profileFields: ["id", "displayName", "photos", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
      //check if the user already exists and return it
      const result = await ifUserExists(profile.emails[0].value);
      if (!result) {
        const userBody = {
          sub_id: profile.id,
          email: profile.emails[0].value,
          password: profile.id,
          loginProvider: 2,
          status: 1,
          verified: 1
        };
        let fullname = profile.displayName.split(" ");
        const userProfile = {
          firstName: fullname[0],
          lastName: fullname[1],
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
