import {
  getAllEvents,
  getEventById,
  getUserEvents,
  createEvent,
  editEvent,
  publishEvent,
  unpublishEvent,
  deleteEvent,
  createEventDay,
  getAddedEventDay,
  getEventBySnippet
} from '../domains/event/index'
import { getLineupByDay } from '../domains/event/lineup'
import { ifUserIdExists } from '../domains/user'

export const createGetEvents = () => () => 'Hello world'

// module.exports = {
//   async createEvent(req, res) {
//     try {
//       const { user } = req.user
//       const check = await ifUserIdExists(user.data.user_id)
//       if (!check) {
//         return res.json('Invalid user id provided')
//       }
//       const event = await createEvent(req)
//       const { event_id } = event
//       const payload = {
//         event_id,
//         event_dates: req.body.event_dates,
//         has_questions: 0,
//         has_feedback: 0
//       }
//       await createEventDay(payload)
//       // let resultData = { event, event_days: eventD }
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async editEvent(req, res) {
//     const eventPayload = {
//       file: req.file,
//       event_id: req.params.event_id,
//       body: req.body
//     }
//     try {
//       await editEvent(eventPayload)
//       const event = await getEventById(req.params.event_id)
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async publishEvent(req, res) {
//     try {
//       const event = await publishEvent(req.params.event_id)
//       if (!event) return res.status(404).send('event with given id not found')
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async unpublishEvent(req, res) {
//     try {
//       const event = await unpublishEvent(req.params.event_id)
//       if (!event) return res.status(404).send('event with given id not found')
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async getAllEvents(req, res) {
//     try {
//       const events = await getAllEvents()
//       return res.json(events)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async getEventById(req, res) {
//     try {
//       const event = await getEventById(req.params.event_id)
//       if (!event) return res.status(404).send('event with given id not found')
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async getEventbySnippet(req, res) {
//     try {
//       const event = await getEventBySnippet(req.params.snippet)
//       if (!event) return res.status(404).send('event cannot be not found')
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async deleteEvent(req, res) {
//     try {
//       const event = await deleteEvent(req.params.event_id)
//       if (!event) return res.status(404).send('event with given id not found')
//       return res.json(event)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },

//   async getUserEvents(req, res) {
//     try {
//       let events = await getUserEvents(req.params.user_id)
//       if (!events) return res.status(404).send('user with given id not found')
//       return res.json(events)
//     } catch (error) {
//       res.status(500).send({
//         message: error.message || 'Something went wrong'
//       })
//     }
//   },
//   async getEventDay(req, res) {
//     try {
//       const result = await getAddedEventDay(req.params.day_id)
//       return res.json(result)
//     } catch (error) {
//       console.log(error)
//     }
//   },

//   async getLineupByDay(req, res) {
//     try {
//       const result = await getLineupByDay(req.params)
//       return res.json(result)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
