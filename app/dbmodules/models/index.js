import connection from '../connection'
import Memo from './memo'

const models = {
  Memo: Memo
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export default connection.sync().then(() => {
  // return models.Memo.create({
  //   text: 'Test',
  // });
  console.log('Connected Postgres !!')
});

// {force: true}