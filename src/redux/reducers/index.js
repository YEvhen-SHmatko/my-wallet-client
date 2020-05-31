import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducers = combineReducers({
  public: authReducer,
});
export default rootReducers;
