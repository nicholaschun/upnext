import db from '../../database/models/index'
import util from '../../utils/index'

module.exports = {
  async createUser(body) {
    const verifyToken = util.genToken(body.email)
    return await db.User.create({
      email: body.email,
      status: body.status,
      verified: body.verified,
      verify_token: verifyToken,
      login_provider: body.loginProvider,
      password: util.encryptPass(body.password),
      sub_id: body.sub_id,
      user_id: util.genuuid()
    })
  },

  async createUserProfile(body) {
    return await db.UserProfile.create({
      user_id: body.id,
      first_name: body.profile.firstName,
      last_name: body.profile.lastName,
      full_name: `${body.profile.firstName} ${body.profile.lastName}`,
      organization: body.profile.organization,
      profile: body.profile.profile
    })
  },

  async editUserProfile(body, user_id) {
    return await db.UserProfile.update(
      {
        first_name: body.first_name,
        last_name: body.last_name,
        full_name: `${body.first_name} ${body.last_name}`,
        organization: body.organization
      },
      { where: { user_id: user_id } }
    )
  },

  async ifUserExists(email) {
    return await db.User.findOne({
      where: { email: email },
      include: [{ model: db.UserProfile }]
    })
  },

  async ifUserIdExists(user_id) {
    return await db.User.findOne({
      where: { user_id: user_id },
      include: [{ model: db.UserProfile }]
    })
  }
}
