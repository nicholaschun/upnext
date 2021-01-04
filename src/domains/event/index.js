/*  run all database queries for events here */

import db from '../../db/models/index'
import { generateEventLink, genuuid } from '../../utils/index'
import { uploadDataImage } from './../../utils/handleFile'
import crud from './../crud'

let self = (module.exports = {
  async getAllEvents() {
    return await db.Event.findAll({
      include: [{ model: db.Lineup }]
    })
  },

  async getEventById(id) {
    return await db.Event.findOne({
      where: { event_id: id },
      include: [{ model: db.EventDay }]
    })
  },

  async getEventBySnippet(snippet) {
    return await db.Event.findOne({
      where: { url_snippet: snippet },
      include: [{ model: db.EventDay }]
    })
  },

  async getEventByDate(date) {
    return await db.Event.findAll({
      where: { createdAt: date },
      include: [{ model: db.EventDay }]
    })
  },

  async getEventByName(name) {
    return await db.Event.findOne({
      where: { event_name: name },
      include: [{ model: db.Lineup }]
    })
  },

  async getUserEvents(user_id) {
    return await db.Event.findAll({
      where: { user_id: user_id },
      include: [{ model: db.EventDay }]
    })
  },

  async createEvent(req) {
    const { body, file, user } = req
    const eventSnippet = generateEventLink(body.event_name)
    let featured_image =
      'https://upnextresources.s3-eu-west-1.amazonaws.com/events/event_placeholder.jpg'

    if (file) {
      const { location } = await uploadDataImage(file, 'events')
      featured_image = location
    }
    const data = {
      event_id: genuuid(),
      event_name: body.event_name,
      event_image: featured_image,
      user_id: user.user.data.user_id,
      event_url: `up-next.co/${eventSnippet}`,
      url_snippet: eventSnippet,
      is_public: body.is_public,
      description: body.description
    }
    return await crud.create({ model: 'Event', data })
  },

  async editEvent(payload) {
    /* manipulate data here before inserting into db */

    let dateArr = []
    let originArr = JSON.parse(payload.body.event_dates)
    originArr.forEach(el => {
      dateArr.push(el.date)
    })
    let featured_image = ''
    if (payload.file) {
      const { location } = await handleImage.uploadDataImage(
        payload.file,
        'events'
      )
      featured_image = location
    } else {
      featured_image = payload.body.featured_image
    }

    //delete already existing event dates
    const deleteDays = db.EventDay.destroy({
      where: { event_id: payload.event_id }
    })

    //edit main event params
    const editMainEvent = db.Event.update(
      {
        event_name: payload.body.event_name,
        event_days: originArr.length,
        event_dates: JSON.stringify(dateArr),
        event_image: featured_image,
        description: payload.body.description
      },
      { where: { event_id: payload.event_id } }
    )

    //update event days
    let dayPayload = {
      event_id: payload.event_id,
      event_dates: originArr,
      has_questions: payload.body.has_questions,
      has_feedback: payload.body.has_feedback,
      hide_time: payload.body.hide_time
    }
    const editEventDays = self.editEventDay(dayPayload)

    return Promise.all([deleteDays, editMainEvent, editEventDays])
  },
  editEventDay(payload) {
    let event_dates = payload.event_dates
    for (let i = 0; i < event_dates.length; i++) {
      if (event_dates[i].day_id && event_dates[i].event_id) {
        db.EventDay.create({
          event_id: event_dates[i].event_id,
          day_id: event_dates[i].day_id,
          date: event_dates[i].date,
          has_questions: event_dates[i].has_questions,
          has_feedback: event_dates[i].has_feedback,
          hide_time: event_dates[i].hide_time
        })
      } else {
        db.EventDay.create({
          event_id: payload.event_id,
          day_id: util.genuuid(),
          date: event_dates[i].date,
          has_questions: payload.has_questions,
          has_feedback: payload.has_feedback,
          hide_time: payload.hide_time
        })
      }
    }
  },

  async publishEvent(event_id) {
    return await db.Event.update(
      {
        event_status: 1
      },
      { where: { event_id: event_id } }
    )
  },

  async unpublishEvent(event_id) {
    return await db.Event.update(
      {
        event_status: 0
      },
      { where: { event_id: event_id } }
    )
  },

  async deleteEvent(id) {
    return await db.Event.destroy({
      where: { event_id: id }
    })
  },

  async deleteEventDay(id) {
    return await db.EventDay.destroy({
      where: { event_id: id }
    })
  },

  async createEventDay(payload) {
    let event_dates = payload.event_dates || []
    let day_ids = {}

    let eventDayData = []
    for (let i = 0; i < event_dates.length; i++) {
      day_ids[genuuid()] = event_dates[i]
      let sampleDaydata = {
        event_id: payload.event_id,
        day_id: null,
        date: null,
        has_questions: payload.has_questions,
        has_feedback: payload.has_feedback
      }
      sampleDaydata.day_id = Object.keys(day_ids)[i]
      sampleDaydata.date = event_dates[i]
      eventDayData.push(sampleDaydata)
    }
    return Promise.resolve(db.EventDay.bulkCreate(eventDayData))
  },
  async getAddedEventDay(day_id) {
    return Promise.resolve(db.EventDay.findOne({ where: { day_id: day_id } }))
  }
})