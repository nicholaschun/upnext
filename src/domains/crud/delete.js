import db from '../../db/models/index'

export default ({ model, data }) => {
  const table = db[model]
  return Promise.resolve(table.delete(data))
}
