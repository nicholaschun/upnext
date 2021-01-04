import { createContainer, asFunction, InjectionMode, asValue } from 'awilix'

import {
  createGetEvents,
  createCreateEvent,
  createGetOneEvent,
  createEditEvent,
  createDeleteEvent,
  createGetUserEvents
} from '../service/events/core'

import config from './../../config'
import models from './../db/models/index'

import { createS3Client, createPutToS3 } from './../utils/s3'
import { create, get, update, list, remove } from './../utils/crud'

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  config: asValue(config),
  models: asValue(models),

  createRecord: asFunction(create).scoped(),
  getRecord: asFunction(get).scoped(),
  listRecord: asFunction(list).scoped(),
  updateRecord: asFunction(update).scoped(),
  deleteRecord: asFunction(remove).scoped(),

  getAllEvents: asFunction(createGetEvents).scoped(),
  createEvent: asFunction(createCreateEvent).scoped(),
  getOneEvent: asFunction(createGetOneEvent).scoped(),
  getUserEvents: asFunction(createGetUserEvents).scoped(),
  editEvent: asFunction(createEditEvent).scoped(),
  deleteEvent: asFunction(createDeleteEvent).scoped(),

  s3Client: asFunction(createS3Client).scoped(),
  putToS3: asFunction(createPutToS3).scoped()
})

export default container
