import {
  getLineup,
  createLineup,
  editLineup,
  deleteLineup
} from '../domains/event/lineup'

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
      const lineup = await getLineup(req.params.event_id)
      if (!lineup) return res.status(404).send('lineup with given id not found')
      return res.json(lineup)
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
      if (!lineup) return res.status(404).send('lineup with given id not found')
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
      if (!lineup) return res.status(404).send('lineup with given id not found')
      return res.json(lineup)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Something went wrong'
      })
    }
  }
}
