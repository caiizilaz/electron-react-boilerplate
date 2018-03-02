import Sequelize from 'sequelize'

const connection = new Sequelize('electron_react', 'postgres', 'root', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

export default connection