/*  run all database queries for events here */

import db from '../../database/models/event'
import util from '../../utils/index'

module.exports = {
  async getAllEvents() {
    return await db.Event.findAll()
  },

  async getEventById(id) {
    return await db.Event.findOne({
      where: { event_id: id }
    })
  },

  async getEventByDate(date) {
    return await db.Event.findOne({
      where: { createdAt: date }
    })
  },

  async getEventByName(name) {
    return await db.Event.findOne({
      where: { event_name: name }
    })
  },

  async getUserEvents(user_id) {
    return await db.Event.findOne({
      where: { user_id: user_id }
    })
  },

  async createEvent(data) {
    return await db.Event.create({
      event_id: data.event_id,
      event_name: data.eventName,
      event_days: data.eventDays,
      event_category: data.eventCategory,
      event_status: data.eventStatus,
      event_image: data.eventImage,
      has_feedback: data.hasFeedback,
      has_questions: data.hasQuestions,
      user_id: data.user_id,
      event_url: data.eventUrl,
      url_snippet: data.urlSnippet,
      additional_info: data.additionalInfo
    })
  },

  async editEvent(data) {
    return await db.Event.update(
      {
        event_name: data.eventName,
        event_days: data.eventDays,
        event_category: data.eventCategory,
        event_status: data.eventStatus,
        event_image: data.eventImage,
        has_feedback: data.hasFeedback,
        has_questions: data.hasQuestions,
        event_url: data.eventUrl,
        url_snippet: data.urlSnippet,
        additional_info: data.additionalInfo
      },
      { where: { event_id: event_id } }
    )
  },

  async deleteEvent(id) {
    return await db.Event.destroy({
      where: { event_id: id }
    })
  }
}
