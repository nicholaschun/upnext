import db from "./../../database/models/index";
import {genToken, encryptPass} from "./../../utils/genRandom";


module.exports = {
  async createUser(body) {
    const verifyToken = genToken(body.email)
    return await db.User.create({
      email: body.email,
      status: body.status,
      verified: body.verified,
      verify_token: verifyToken,
      login_provider: body.loginProvider,
      password: encryptPass(body.password),
      sub_id: body.sub_id
    });
  },

  async createUserProfile(body) {
    return await db.UserProfile.create({
      user_id: body.user_id,
      first_name: body.firstName,
      last_name: body.lastName,
      full_name: `${body.firstName} ${body.lastName}`,
      organization: body.organization,
      profile: body.profile
    });
  },

  async ifUserExists(email){
    return  await db.User.findOne({where: {email: email}, include: [{model: db.UserProfile}]})
  }

};
