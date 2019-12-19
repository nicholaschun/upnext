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
      const event = await createEvent(req.body)
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async editEvent(req, res) {
    try {
      const body = {
        event_name: req.body.event_name,
        event_days: req.body.event_days,
        event_category: req.body.event_category,
        event_status: req.body.event_status,
        event_image: req.body.event_image,
        has_feedback: req.body.has_feedback,
        has_questions: req.body.has_questions,
        event_url: req.body.event_url,
        url_snippet: req.body.url_snippet,
        additional_info: req.body.additional_info
      }
      const event = await editEvent(body, req.params.event_id)
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async getAllEvents(req, res) {
    try {
      const events = await getAllEvents()
      return res.json(events)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async getEventById(req, res) {
    try {
      const event = await getEventById(req.params.event_id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async deleteEvent(req, res) {
    try {
      const event = await deleteEvent(req.params.event_id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },
  async getUserEvents(req, res) {
    try {
      const user = await getUserEvents(req.params.user_id)
      if (!user) return res.status(404).send('user with given id not found')
      return res.json(user)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
