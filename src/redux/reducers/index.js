import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import init from './init';

const rootReducers = combineReducers({
  public: auth,
  app,
  init,
});
export default rootReducers;
