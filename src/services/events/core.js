import { map as mapAwait } from 'awaiting'

import { generateEventLink, genuuid, formatDate } from '../../utils/index'
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

export const createCreateEvent = ({ createRecord, config }) => async req => {
  const { body, user } = req
  const { defaultEventImage } = config
  const { event_image: eventImage } = body
  const eventSnippet = generateEventLink(body.event_name)
  const event_id = genuuid()
  const eventPayload = {
    ...body,
    event_image: eventImage || defaultEventImage,
    event_id,
    user_id: user.user.data.user_id,
    event_url: `up-next.co/${eventSnippet}`,
    url_snippet: eventSnippet
  }
  // creates event dates
  const { event_dates } = body
  if (event_dates) {
    await mapAwait(event_dates, event_dates.length, async event_date => {
      const eventDayPayload = {
        event_id,
        day_id: genuuid(),
        date: formatDate(event_date),
        has_questions: 0,
        has_feedback: 0,
        hide_time: 0
      }
      await createRecord({ model: eventDayModel, payload: eventDayPayload })
    })
  }
  const data = await createRecord({ model: eventModel, payload: eventPayload })
  return { data, statusCode: 201 }
}

export const createEditEvent = ({ updateRecord, config }) => async req => {
  const { params, body } = req
  const { defaultEventImage } = config
  const conditions = {
    event_id: params.event_id
  }
  const { event_image: eventImage } = body
  const eventPayload = {
    ...body,
    event_image: eventImage || defaultEventImage
  }
  const data = await updateRecord({
    model: eventModel,
    conditions,
    payload: eventPayload
  })
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

export const createCreateEventDay = ({ createRecord }) => async req => {
  const { params, body } = req
  const data = await mapAwait(body, body.length, async event_date => {
    const eventDayPayload = {
      event_id: params.event_id,
      day_id: genuuid(),
      date: formatDate(event_date.date),
      has_questions: 0,
      has_feedback: 0,
      hide_time: 0
    }
    return await createRecord({
      model: eventDayModel,
      payload: eventDayPayload
    })
  })
  return { data, statusCode: 200 }
}

export const createEditEventDay = ({ updateRecord }) => async req => {
  const { params, body: payload } = req
  payload.date = formatDate(payload.date)
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
  await deleteRecord({ model: lineupModel, conditions })

  return { data, statusCode: 200 }
}

export const createSearchEvent = ({ filterRecord, models }) => async req => {
  const {
    query: { s },
    params: { field }
  } = req
  const conditions = {
    field,
    searchVal: s
  }
  const relations = [
    {
      model: models.User
    },
    {
      model: models.EventDay
    }
  ]
  const data = await filterRecord({ model: eventModel, conditions, relations })
  return { data, statusCode: 200 }
}
