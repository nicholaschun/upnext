import passport from "passport";
import { validate } from "./../utils/validate";
import {
  createUser,
  createUserProfile,
  ifUserExists
} from "./../domains/user/createUser";
import { issueToken, verifyToken } from "./../app/auth/jwt/issueToken";

module.exports = {
  async createUser(req, res, next) {
    try {
      validate(req, res);
      const check = await ifUserExists(req.body.email);
      if (check) {
        return res.status(401).json({ message: "User already exists" });
      }
      const body = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        organization: req.body.organization,
        profile: '',
        status: 0,
        verified: 0,
        loginProvider: 3
      }
      const user = await createUser(body);
      req.body.user_id = user.id;
      await createUserProfile(body);
      return res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  loginUser(req, res, next) {
    try {
      validate(req, res);
      passport.authenticate("local", (err, user, info) => {
        if (err || !user) {
          console.log("Error1", err);
          return res.status(400).send(info);
        }
        const userBody = { id: user.id, email: user.email };
        req.logIn(userBody, err => {
          if (err) {
            return res.status(404).send("Username or password incorrect");
          }
        });
        res.status(200).json(req.user);
      })(req, res, next);
    } catch (error) {
      console.log(error);
    }
  },
  loginUserJWT(req, res, next) {
    try {
      validate(req, res);
      passport.authenticate("local", (err, user, info) => {
        if (err || !user) {
          console.log("Error1", info);
          return res.status(400).send(info);
        }
        const body = { iq: user.id, ie: user.email };
        const token = issueToken(body);
        const data = {
          data: token,
          expiresIn: "365 days"
        };
        res.status(200).json({ data });
      })(req, res, next);
    } catch (error) {}
  },
  async sendPasswordEmail(req, res) {
    try {
      validate(req, res);
      res.json(req.body);
      const { email } = req.body;
    } catch (error) {
      console.log(error);
    }
  },
  resetPassword(req, res) {
    try {
      validate(req, res);
      res.json(req.body);
      const { token, newPassword, confirmPassword } = req.body;
    } catch (error) {
      console.log(error);
    }
  },
  logoutUser(req, res) {
    res.send("logout user");
  }
};
