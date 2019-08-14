// import passport from "passport";
import db from "./../../database/models/index";
import localStrategy from 'passport-local'

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
        db.User.findOne({ where: { email: email, status: 1 } })
          .then(user => {
            if (!user) {
              return done(null, false, {
                message: "Username / Password incorrect"
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
  // require('./../src/backend/app/auth/strategies/local-strategy')
};
