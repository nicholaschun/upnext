/*  run all database queries for events here */

import db from '../../database/models/index'
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
    return await db.Event.findAll({
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
      event_id: util.genuuid(),
      event_name: data.event_name,
      event_days: data.event_days,
      event_category: data.event_category,
      event_status: data.event_status,
      event_image: data.event_image,
      has_feedback: data.has_feedback,
      has_questions: data.has_questions,
      user_id: data.user_id,
      event_url: data.event_url,
      url_snippet: data.url_snippet,
      additional_info: data.additional_info
    })
  },

  async editEvent(data, event_id) {
    return await db.Event.update(
      {
        event_name: data.event_name,
        event_days: data.event_days,
        event_category: data.event_category,
        event_status: data.event_status,
        event_image: data.event_image,
        has_feedback: data.has_feedback,
        has_questions: data.has_questions,
        event_url: data.event_url,
        url_snippet: data.url_snippet,
        additional_info: data.additional_info
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