import Sequelize from 'sequelize'
import connection from '../connection'

const Memo = connection.define("memo", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

export default Memo