import path from 'path'
import { map as mapAwait } from 'awaiting'

import { generateEventLink, genuuid, clearTempFolder } from '../../utils/index'
import { eventModel, eventDayModel, lineupModel } from '../../utils/models'

export const createGetEvents = ({ listRecord, models }) => async () => {
  const relations = [
    {
      model: models.User
    }
  ]
  const data = await listRecord({ model: eventModel, relations })
  return { data, statusCode: 200 }
}

export const createGetOneEvent = ({ getRecord, models }) => async req => {
  const { params } = req
  const conditions = {
    event_id: params.event_id
  }
  const relations = [
    {
      model: models.User
    },
    {
      model: models.EventDay
    }
  ]
  const data = await getRecord({ model: eventModel, conditions, relations })
  return { data, statusCode: 200 }
}

export const createGetUserEvents = ({ listRecord, models }) => async req => {
  const { params } = req
  const conditions = {
    user_id: params.user_id
  }
  const relations = [
    {
      model: models.User
    },
    {
      model: models.EventDay
    }
  ]
  const data = await listRecord({ model: eventModel, conditions, relations })
  return { data, statusCode: 200 }
}

export const createCreateEvent = ({ createRecord }) => async req => {
  const { body, user } = req
  const eventSnippet = generateEventLink(body.event_name)
  const event_id = genuuid()
  const eventPayload = {
    ...body,
    event_id,
    user_id: user.user.data.user_id,
    event_url: `up-next.co/${eventSnippet}`,
    url_snippet: eventSnippet
  }
  // creates event dates
  const { event_dates } = body
  clearTempFolder()
  await mapAwait(event_dates, event_dates.length, async event_date => {
    const eventDayPayload = {
      event_id,
      day_id: genuuid(),
      date: event_date,
      has_questions: 0,
      has_feedback: 0,
      hide_time: 0
    }
    await createRecord({ model: eventDayModel, payload: eventDayPayload })
  })
  const data = await createRecord({ model: eventModel, payload: eventPayload })
  clearTempFolder()
  return { data, statusCode: 201 }
}

export const createEditEvent = ({
  updateRecord,
  config,
  putToS3
}) => async req => {
  const { params, body, file } = req
  const { defaultEventImage } = config

  const conditions = {
    event_id: params.event_id
  }

  let featuredImage = defaultEventImage
  if (file) {
    const key = `events/${Date.now().toString()}${path.extname(
      file.originalname
    )}`
    const { Location } = await putToS3({ key, file })
    featuredImage = Location
  }
  const eventPayload = {
    ...body,
    event_image: featuredImage
  }
  const data = await updateRecord({
    model: eventModel,
    conditions,
    payload: eventPayload
  })
  clearTempFolder()
  return { data, statusCode: 200 }
}
export const createDeleteEvent = ({ deleteRecord }) => async req => {
  const { params } = req
  const conditions = {
    event_id: params.event_id
  }
  const data = await deleteRecord({ model: eventModel, conditions })
  await deleteRecord({ model: eventDayModel, conditions })
  await deleteRecord({ model: lineupModel, conditions })
  return { data, statusCode: 200 }
}

export const createEditEventDay = ({ updateRecord }) => async req => {
  const { params, body: payload } = req
  const conditions = {
    day_id: params.day_id
  }
  const data = await updateRecord({ model: eventDayModel, conditions, payload })
  return { data, statusCode: 200 }
}

export const createDeleteEventDay = ({ deleteRecord }) => async req => {
  const { params } = req
  const conditions = {
    day_id: params.day_id
  }
  const data = await deleteRecord({ model: eventDayModel, conditions })
  return { data, statusCode: 200 }
}
