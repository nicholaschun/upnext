import db from "./../../database/models/index";
import bcrypt from "bcrypt";
import crypto from "crypto";

module.exports = {
  createUser(body) {
    const verifyToken = crypto
      .createHash("sha256")
      .update(body.email)
      .digest("hex");
    return db.User.create({
      email: body.email,
      status: 0,
      verified: 0,
      verify_token: verifyToken,
      login_provider: 1,
      password: bcrypt.hashSync(body.password, 10)
    });
  },

  async createUserProfile(body) {
    return await db.UserProfile.create({
      user_id: body.user_id,
      first_name: body.firstName,
      last_name: body.lastName,
      full_name: `${body.firstName} ${body.lastName}`,
      organization: body.organization
    });
  }
};
