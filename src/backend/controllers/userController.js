import passport from "passport";
import { validate } from "./../utils/validate";
import { createUser, createUserProfile } from "./../domains/user/createUser";
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
          console.log("Error1", info);
          return res.status(400).send(info);
        }
        req.logIn(user, err => {
          if (err) {
            return res.status(404).send("Username or password incorrect");
          }
        });
        res.status(200).json(user);
      })(req, res, next);
    } catch (error) {
      console.log(error);
    }
  },
  async verifyUser(req, res) {
    res.send("verify user");
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
