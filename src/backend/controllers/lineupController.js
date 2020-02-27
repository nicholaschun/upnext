import {
  getLineup,
  createLineup,
  editLineup,
  deleteSingleLineup
} from '../domains/event/lineup'

import { getEventById, deleteEvent } from '../domains/event/index'
module.exports = {
  async createLineup(req, res) {
    try {
      //check if event id exists
      const event = await getEventById(req.params.event_id)
      if (!event) {
        return res.status(401).json('Event with the provided id not found')
      }
      await createLineup(req.body, req.params.event_id)
      return res.status(200).json(true)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async getEventLineup(req, res) {
    try {
      const event = await getEventById(req.params.event_id)
      return res.json(event)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async editEventLineup(req, res) {
    try {
      await editLineup(req.body, req.params.day_id)
      return res.json(true)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async deleteEventLineup(req, res) {
    try {
      const lineup = await deleteSingleLineup(req.params.lineup_id)
      return res.json(lineup)
    } catch (error) {
      res.status(500).json({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
