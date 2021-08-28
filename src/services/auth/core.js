import {
  genuuid,
  encryptPass,
  genToken,
  comparePassword
} from '../../utils/index'
import {
  userModel,
  userProfileModel,
  userSettingsModel
} from '../../utils/models'
import { issueToken } from './jwt/issueToken'

export const createRegister = ({
  createRecord,
  getRecord,
  config
}) => async req => {
  const { body } = req
  const { defaultProfileImage } = config
  const conditions = {
    email: body.email
  }
  const user = await getRecord({ model: userModel, conditions })
  if (user) {
    return { data: 'User already exists', statusCode: 403 }
  }
  const userId = genuuid()
  const userPayload = {
    email: body.email,
    password: encryptPass(body.password),
    first_name: body.first_name,
    last_name: body.last_name,
    profile: defaultProfileImage,
    full_name: `${body.first_name} ${body.last_name}`,
    organization: body.organization,
    status: 1,
    verified: 1,
    sub_id: null,
    loginProvider: 3,
    user_id: userId,
    verify_token: genToken(body.password),
    plan: 'free'
  }
  // create user profile
  await createRecord({ model: userProfileModel, payload: userPayload })
  const data = await createRecord({ model: userModel, payload: userPayload })
  await createRecord({ model: userSettingsModel, payload: userPayload })

  return { data, statusCode: 201 }
}

export const createLogin = ({ getRecord, models }) => async req => {
  const {
    body: { email, password }
  } = req
  const conditions = {
    email: email
  }
  const relations = [
    {
      model: models.UserProfile
    },
    {
      model: models.UserSettings
    }
  ]
  const user = await getRecord({ model: userModel, conditions, relations })
  if (!user) {
    return { data: 'User does not exist', statusCode: 403 }
  }
  if (user.status) {
    const isMatched = await comparePassword(password, user.password)
    if (isMatched) {
      const body = {
        user_id: user.user_id,
        email: user.email,
        first_name: user.UserProfile.first_name,
        last_name: user.UserProfile.last_name,
        organization: user.UserProfile.organization,
        profile: user.UserProfile.profile,
        status: user.status,
        verified: user.verified,
        user_settings: user.UserSetting
      }
      const token = issueToken(body)
      const result = {
        token: token,
        user: body
      }
      return { data: result, statusCode: 200 }
    } else {
      return { data: 'Username / Password Incorrect', statusCode: 403 }
    }
  }
}

export const createWithLoginSocial = ({
  createRecord,
  getRecord,
  models,
  config
}) => async req => {
  const { body } = req
  const { defaultProfileImage } = config
  const conditions = {
    email: body.email
  }
  const relations = [
    {
      model: models.UserProfile
    }
  ]
  const user = await getRecord({ model: userModel, conditions, relations })
  if (user) {
    const body = {
      user_id: user.user_id,
      email: user.email,
      first_name: user.UserProfile.first_name,
      last_name: user.UserProfile.last_name,
      organization: user.UserProfile.organization,
      profile: user.UserProfile.profile,
      status: user.status,
      verified: user.verified
    }
    const token = issueToken(body)
    return { data: { token: token, user: body }, statusCode: 200 }
  }
  const userId = genuuid()
  const userPayload = {
    email: body.email,
    first_name: body.first_name,
    last_name: body.last_name,
    profile: defaultProfileImage,
    full_name: `${body.first_name} ${body.last_name}`,
    status: 1,
    verified: 1,
    sub_id: body.id,
    loginProvider: 2,
    user_id: userId,
    plan: 'free'
  }
  // create user profile
  await createRecord({ model: userProfileModel, payload: userPayload })
  await createRecord({ model: userModel, payload: userPayload })
  await createRecord({ model: userSettingsModel, payload: userPayload })

  const token = issueToken(userPayload)
  return { data: { token: token, user: userPayload }, statusCode: 200 }
}
