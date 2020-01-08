import {
  getLineup,
  createLineup,
  editLineup,
  deleteLineup
} from '../domains/event/lineup'

import { getEventById } from '../domains/event/index'
module.exports = {
  async createLineup(req, res) {
    try {
      const lineup = await createLineup(req.body)
      return res.json(lineup)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async getEventLineup(req, res) {
    try {
      const event = await getEventById(req.params.event_id)
      return res.json(event)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async editEventLineup(req, res) {
    try {
      const body = {
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        description: req.body.description,
        duration: req.body.duration,
        facilitator: req.body.facilitator
      }
      const lineup = await editLineup(body, req.params.lineup_id)
      return res.json(lineup)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  },

  async deleteEventLineup(req, res) {
    try {
      const lineup = await deleteLineup(req.params.lineup_id)
      return res.json(lineup)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
