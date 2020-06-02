import { combineReducers } from 'redux';
import auth from './auth';
import transactions from './transactions';
import products from './products';
import init from './init';

const rootReducers = combineReducers({
  public: auth,
  transactions,
  products,
  init,
});
export default rootReducers;
