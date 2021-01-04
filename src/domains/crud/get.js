import db from '../../db/models/index'

export default ({ model, condition, relation = false, relationModel }) => {
  const table = db[model]
  const findAll = table.findAll()
  if (relation) {
    const tableRelation = db[relationModel]
    findAll.include = [{ model: tableRelation }]
  }
  findAll.where = condition
  return Promise.resolve(findAll)
}
