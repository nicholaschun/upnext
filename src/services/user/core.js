import { userProfileModel, userModel } from '../../utils/models'

export const createAuthenticatedUser = () => async req => {
  return { data: req.user.user.data, statusCode: 200 }
}

export const createEditUser = ({
  updateRecord,
  getRecord,
  models
}) => async req => {
  const { body, params } = req
  const conditions = {
    user_id: params.user_id
  }

  const payload = {
    first_name: body.first_name,
    last_name: body.last_name,
    organization: body.organization,
    full_name: `${body.first_name} ${body.last_name}`
  }

  await updateRecord({
    model: userProfileModel,
    conditions,
    payload
  })
  const result = await getRecord({ model: userProfileModel, conditions })
  return { data: result, statusCode: 200 }
}
