import passport from "passport";
import { validate } from "./../utils/validate";
import { createUser, createUserProfile } from "./../domains/user/createUser";
import {issueToken, verifyToken} from './../app/auth/jwt/issueToken'


module.exports = {
  async createUser(req, res, next) {
    try {
      validate(req, res);
      const user = await createUser(req.body);
      req.body.user_id = user.id;
      await createUserProfile(req.body);
      res.json(user);
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
        const userBody = {id: user.id, email: user.email}
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
      passport.authenticate("jwt", (err, user, info) => {
        if (err || !user) {
          console.log("Error1", info);
          return res.status(400).send(info);
        }
        const body = {iq: user.id, ie: user.email}
        const token = issueToken(body)
        const data = {
          data: token,
          expiresIn: '365 days'
        }
        res.status(200).json({data});
      })(req, res, next);
    } catch (error) {
      
    }
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
