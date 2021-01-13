import { createContainer, asFunction, InjectionMode, asValue } from 'awilix'

import {
  createGetEvents,
  createCreateEvent,
  createGetOneEvent,
  createEditEvent,
  createDeleteEvent,
  createGetUserEvents,
  createEditEventDay,
  createDeleteEventDay
} from '../services/events/core'

import { createSaveLineup, createGetLineup } from '../services/lineups/core'
import {
  createRegister,
  createLogin,
  createWithLoginSocial
} from '../services/auth/core'
import { createAuthenticatedUser, createEditUser } from '../services/user/core'

import config from '../config'
import models from './../db/models/index'

import { createS3Client, createPutToS3 } from '../utils/s3'
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
  editEventDay: asFunction(createEditEventDay).scoped(),
  deleteEventDay: asFunction(createDeleteEventDay).scoped(),

  saveLineup: asFunction(createSaveLineup).scoped(),
  getLineups: asFunction(createGetLineup).scoped(),

  register: asFunction(createRegister).scoped(),
  login: asFunction(createLogin).scoped(),
  loginWithGoogle: asFunction(createWithLoginSocial).scoped(),
  loginWithFacebook: asFunction(createWithLoginSocial).scoped(),

  authenticatedUser: asFunction(createAuthenticatedUser).scoped(),
  editUser: asFunction(createEditUser).scoped(),

  s3Client: asFunction(createS3Client).scoped(),
  putToS3: asFunction(createPutToS3).scoped()
})

export default container
