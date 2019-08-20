import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";

import api from "./src/backend/routes/users";
import providers from "./src/backend/routes/providers";
import userDashboard from "./src/backend/routes/dashboard";
import url from "./src/backend/utils/urls";
import guest from "./src/backend/routes/guest";
import constants from "./constants";
import verifyToken from './src/backend/app/auth/jwt/verifyToken'
import verifySession from './src/backend/app/auth/verifySession'

const app = express();
const port = process.env.PORT || constants.DEFAULT_PORT;
const hostname = constants.DEFAULT_HOST;

app.set("views", "./src/frontend/views");
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(express.static("./src/frontend/public"));

app.use(
  session({
    key: 'upnext_session',
    secret: "upnextsecret2329898",
    resave: false,
    expires: false,
    saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./src/backend/app/auth/passport')(passport);

/* App routes */

app.use("/", guest);
app.use("/dashboard",verifySession, userDashboard);
app.use("/api", api);
app.use("/auth",providers)

/* Start express server */

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`);
});

module.exports = app;
