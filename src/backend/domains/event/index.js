/*  run all database queries for events here */

import db from '../../database/models/index'
import util from '../../utils/index'
import handleImage from './../../utils/handleFile'

module.exports = {
  async getAllEvents() {
    return await db.Event.findAll({
      include: [{ model: db.Lineup }]
    })
  },

  async getEventById(id) {
    return await db.Event.findOne({
      where: { event_id: id },
      include: [{ model: db.Lineup }]
    })
  },

  async getEventByDate(date) {
    return await db.Event.findAll({
      where: { createdAt: date },
      include: [{ model: db.Lineup }]
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

  async createEvent(data, file) {
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
      event_days: data.event_dates.length,
      event_status: 0,
      event_dates: JSON.stringify(data.event_dates),
      event_image: featured_image,
      user_id: data.user_id,
      event_url: null,
      url_snippet: null,
      description: data.description
    })
  },

  async editEvent(req, event_id) {
    let final_image = ''
    if (req.file) {
      const { location } = await handleImage.uploadDataImage(req.file, 'events')
      final_image = location
    } else {
      final_image = req.body.featured_image
    }
    return await db.Event.update(
      {
        event_name: req.body.event_name,
        event_days: req.body.event_days,
        event_category: req.body.event_category,
        event_image: final_image,
        has_feedback: req.body.has_feedback,
        has_questions: req.body.has_questions,
        additional_info: req.body.additional_info
      },
      { where: { event_id: event_id } }
    )
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
        questions: payload.has_feedback,
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
}
