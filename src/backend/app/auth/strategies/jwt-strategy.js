import passport from "passport";
import jwtStrategy from "passport-jwt";
import fs from "fs";
import path from "path";
const privateKey = fs
  .readFileSync(path.resolve(__dirname, "../jwt/keys/private.key"))
  .toString("utf8");
const ExtractJwt = jwtStrategy.ExtractJwt;

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = privateKey;
opts.issuer = "upnext";
opts.audience = "up-next.co/apps";
opts.expiresIn = "365d";
opts.subject = "admin@up-next.co";

passport.use(
  new jwtStrategy.Strategy(opts, (jwtPayload, done) => {
    console.log(jwtPayload);
    if (jwtPayload) {
      return done(null, jwtPayload);
    } else {
      return done(null, false, {
        message: "You are not authorized to access this resource"
      });
    }
  })
);
