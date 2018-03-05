// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import memo from './memo';

const rootReducer = combineReducers({
  memo,
  router,
});

export default rootReducer;
