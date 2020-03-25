/*  run all database queries for events here */

import db from '../../database/models/index'
import util from '../../utils/index'
import handleImage from './../../utils/handleFile'

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
      where: { user_id: user_id }
      // include: [{ model: db.EventDay }]
    })
  },

  async createEvent(data, file) {
    let eventSnippet = util.generateEventLink(data.event_name)
    let featured_image = ''
    if (file) {
      const { location } = await handleImage.uploadDataImage(file, 'events')
      featured_image = location
    } else {
      featured_image =
        'https://upnextresources.s3-eu-west-1.amazonaws.com/events/event_placeholder.jpg'
    }
    return await db.Event.create({
      event_id: util.genuuid(),
      event_name: data.event_name,
      event_days: JSON.parse(data.event_dates.length),
      event_status: 0,
      event_dates: data.event_dates,
      event_image: featured_image,
      user_id: data.user_id,
      event_url: `up-next.co/${eventSnippet}`,
      url_snippet: eventSnippet,
      description: data.description
    })
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
      has_feedback: payload.body.has_feedback
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
          questions: event_dates[i].has_questions,
          feedback: event_dates[i].has_feedback
        })
      } else {
        db.EventDay.create({
          event_id: payload.event_id,
          day_id: util.genuuid(),
          date: event_dates[i].date,
          questions: payload.has_questions,
          feedback: payload.has_feedback
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
    let event_dates = payload.event_dates
    let day_ids = {}

    let eventDayData = []
    for (let i = 0; i < event_dates.length; i++) {
      day_ids[util.genuuid()] = event_dates[i]
      let sampleDaydata = {
        event_id: payload.event_id,
        day_id: null,
        date: null,
        questions: payload.has_questions,
        feedback: payload.has_feedback
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
