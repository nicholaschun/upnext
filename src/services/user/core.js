import { userProfileModel } from '../../utils/models'

export const createAuthenticatedUser = () => async req => {
  return { data: req.user.user.data, statusCode: 200 }
}

export const createEditUser = ({ updateRecord }) => async req => {
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

  const data = await updateRecord({
    model: userProfileModel,
    conditions,
    payload
  })
  return { data, statusCode: 200 }
}
