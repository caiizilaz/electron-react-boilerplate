import Model from '../models/memo'

export default {
  create: async (callback, params) => {
    let res = await Model.create(params)
    callback(res)
  },
  read: async (callback) => {
    let res = await Model.findAll({
      attributes: ['id', 'text']
    })
    callback(res.map(r => r.dataValues))
  },
  update: async (callback, params) => {
    let res = await Model.update(
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
    let res = await Model.destroy({
      where: {
        id: params
      }
    })
    callback(res)
  },
}