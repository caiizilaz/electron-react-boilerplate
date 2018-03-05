import Model from '../models/memo'

export default {
  create: async (callback, params) => {
    const res = await Model.create(params)
    callback(res)
  },
  read: async (callback) => {
    const res = await Model.findAll()
    callback(res.map(r => r.dataValues))
  },
  update: async (callback, params) => {
    const res = await Model.update(
      {
        text: params.text
      },
      {
        where: { id: params.id }
      }
    )
    callback(res)
  },
  delete: async (callback, params) => {
    const res = await Model.destroy({
      where: {
        id: params
      }
    })
    callback(res)
  },
}