import { map as mapList } from 'awaiting'

import { genuuid } from '../../utils/index'
import { lineupModel } from '../../utils/models'

export const createGetLineup = ({ listRecord }) => async req => {
  const { params } = req
  const conditions = {
    day_id: params.day_id
  }
  const data = await listRecord({ model: lineupModel, conditions })
  return { data, statusCode: 200 }
}

export const createSaveLineup = ({
  createRecord,
  deleteRecord
}) => async req => {
  const { body: lineups, params } = req

  const conditions = {
    day_id: params.day_id,
    event_id: params.event_id
  }
  await deleteRecord({ model: lineupModel, conditions })
  await mapList(lineups, lineups.length, async lineup => {
    const lineupPayload = {
      event_id: params.event_id,
      day_id: params.day_id,
      lineup_id: genuuid(),
      start_time: lineup.start_time,
      end_time: lineup.end_time,
      duration: lineup.duration,
      activity: lineup.activity,
      description: lineup.description,
      duration_as_milli: lineup.duration_as_milli,
      facilitator: lineup.facilitator
    }
    await createRecord({
      model: lineupModel,
      payload: lineupPayload
    })
  })
  return { data: lineups, statusCode: 201 }
}
