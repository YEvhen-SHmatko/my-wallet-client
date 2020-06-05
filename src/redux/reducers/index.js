import { combineReducers } from 'redux';
import auth from './auth';
import transactions from './transactions';
import categories from './categories';
import products from './products';
import period from './period';
import init from './init';

const rootReducers = combineReducers({
  public: auth,
  transactions,
  categories,
  products,
  period,
  init,
});
export default rootReducers;
