import passport from "passport";
import localStrategy from "passport-local";
import bcrypt from "bcrypt";

import db from "./../../database/models/index";

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  passport.use(
    new localStrategy.Strategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        // check if user email exists
        db.User.findOne({ where: { email: email } })
          .then(user => {
            console.log(user);
            if (!user) {
              return done(null, false, {
                message: "Username / Password incorrect"
              });
            }
            if (!user.status) {
              return done(null, false, {
                message: "Kindly activate your account to start your session"
              });
            }
            // Match passwords
            bcrypt.compare(password, user.password, (err, isMatched) => {
              if (err) throw err;
              if (isMatched) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "Username / Password incorrect"
                });
              }
            });
          })
          .catch(err => {
            return done(err);
          });
      }
    )
  );
  // require('./strategies/local-strategy')
};
