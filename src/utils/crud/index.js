export const create = ({ models }) => ({ model, payload }) => {
  const table = models[model]
  return Promise.resolve(table.create(payload))
}

export const list = ({ models }) => ({
  model,
  conditions = null,
  relations = null
}) => {
  const table = models[model]
  return Promise.resolve(
    table.findAll({
      where: { ...conditions },
      include: relations
    })
  )
}

export const get = ({ models }) => ({
  model,
  conditions,
  relations = null
}) => {
  const table = models[model]
  return Promise.resolve(
    table.findOne({
      where: { ...conditions },
      include: relations
    })
  )
}

export const update = ({ models }) => ({ model, payload, conditions }) => {
  const table = models[model]
  return Promise.resolve(table.update(payload, { where: { ...conditions } }))
}

export const remove = ({ models }) => ({ model, conditions }) => {
  const table = models[model]
  return Promise.resolve(
    table.destroy({
      where: { ...conditions }
    })
  )
}
