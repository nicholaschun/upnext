import {
  getAllEvents,
  getEventById,
  getUserEvents,
  createEvent,
  editEvent,
  publishEvent,
  unpublishEvent,
  deleteEvent
} from '../domains/event/index'
import { validate } from './../utils/validate'
import { ifUserIdExists } from '../domains/user'

module.exports = {
  async createEvent(req, res) {
    validate(req, res)
    try {
      //check to see if user exists
      const user = await ifUserIdExists(req.body.user_id)
      if (!user) {
        return res.json('Invalid user id provided')
      }
      let event = await createEvent(req.body, req.file)
      event.event_dates = JSON.parse(event.event_dates)
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async editEvent(req, res) {
    try {
      const event = await editEvent(req, req.params.event_id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async publishEvent(req, res) {
    try {
      const event = await publishEvent(req.params.event_id)
      if (!event) return res.status(404).send('event with given id not found')
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async unpublishEvent(req, res) {
    try {
      const event = await unpublishEvent(req.params.event_id)
      if (!event) return res.status(404).send('event with given id not found')
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
      const events = await getUserEvents(req.params.user_id)
      if (!events) return res.status(404).send('user with given id not found')
      return res.json(events)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
