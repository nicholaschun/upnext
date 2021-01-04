import db from '../../db/models/index'

export default ({ model, data }) => {
  const table = db[model]
  return Promise.resolve(table.create(data))
}