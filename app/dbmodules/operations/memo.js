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
  update: (callback, params) => {

  },
  delete: (callback, params) => {

  },
}