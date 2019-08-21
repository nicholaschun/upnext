module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  require("./strategies/local-strategy");
  require("./strategies/google-strategy");
  require("./strategies/facebook-strategy");
  require("./strategies/jwt-strategy");
};
