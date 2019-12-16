import {
  getAllEvents,
  getEventById,
  getUserEvents,
  createEvent,
  editEvent,
  deleteEvent
} from '../domains/event'

module.exports = {
  async createEvent(req, res) {
    try {
      const body = {
        event_name: req.body.eventName,
        event_days: req.body.eventDays,
        event_category: req.body.eventCategory,
        event_status: req.body.eventStatus,
        event_image: req.body.eventImage,
        has_feedback: req.body.hasFeedback,
        has_questions: req.body.hasQuestions,
        user_id: req.body.user_id,
        event_url: req.body.eventUrl,
        url_snippet: req.body.urlSnippet,
        additional_info: req.body.additionalInfo
      }
      const event = await createEvent(body)
      return res.json(event)
    } catch (error) {
      console.log(error)
    }
  },
  async editEvent(req, res) {
    try {
      const body = {
        event_name: req.body.eventName,
        event_days: req.body.eventDays,
        event_category: req.body.eventCategory,
        event_status: req.body.eventStatus,
        event_image: req.body.eventImage,
        has_feedback: req.body.hasFeedback,
        has_questions: req.body.hasQuestions,
        event_url: req.body.eventUrl,
        url_snippet: req.body.urlSnippet,
        additional_info: req.body.additionalInfo
      }
      const event = await editEvent(body)
      return res.json(event)
    } catch (error) {
      console.log(error)
    }
  },
  async getAllEvents(req, res) {
    try {
      const events = await getAllEvents()
      return res.json(events)
    } catch (error) {
      console.log(error)
    }
  },
  async getEventById(req, res) {
    try {
      const event = await getEventById(req.params.id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteEvent(req, res) {
    try {
      const event = await deleteEvent(req.params.id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      console.log(error)
    }
  },
  async getUserEvents(req, res) {
    try {
      const user = await getUserEvents(req.params.id)
      if (!user) return res.status(404).send('user with given id not found')
      return res.json(user)
    } catch (error) {
      console.log(error)
    }
  }
}
