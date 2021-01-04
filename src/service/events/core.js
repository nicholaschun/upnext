import { generateEventLink, genuuid } from '../../utils/index'
import path from 'path'

const model = 'Event'
export const createGetEvents = ({ listRecord, models }) => async () => {
  const relations = [
    {
      model: models.User
    }
  ]
  return await listRecord({ model, relations })
}

export const createGetOneEvent = ({ getRecord, models }) => async req => {
  const { params } = req
  const conditions = {
    event_id: params.event_id
  }
  const relations = [
    {
      model: models.User
    }
  ]
  return await getRecord({ model, conditions, relations })
}

export const createGetUserEvents = ({ listRecord }) => async req => {
  const { params } = req
  const conditions = {
    user_id: params.user_id
  }
  return await listRecord({ model, conditions })
}

export const createCreateEvent = ({
  createRecord,
  config,
  putToS3
}) => async req => {
  const { defaultProfileImage } = config
  const { body, file, user } = req
  const eventSnippet = generateEventLink(body.event_name)
  let featuredImage = defaultProfileImage
  if (file) {
    const key = `events/${Date.now().toString()}${path.extname(
      file.originalname
    )}`
    const { Location } = await putToS3({ key, file })
    featuredImage = Location
  }
  const payload = {
    ...body,
    event_id: genuuid(),
    event_image: featuredImage,
    user_id: user.user.data.user_id,
    event_url: `up-next.co/${eventSnippet}`,
    url_snippet: eventSnippet
  }
  return await createRecord({ model, payload })
}

export const createEditEvent = ({ updateRecord }) => async req => {
  const { params, body: payload } = req
  const conditions = {
    event_id: params.event_id
  }
  return await updateRecord({ model, conditions, payload })
}
export const createDeleteEvent = ({ deleteRecord }) => async req => {
  const { params } = req
  const conditions = {
    event_id: params.event_id
  }
  return await deleteRecord({ model, conditions })
}
