import { combineReducers } from 'redux';
import auth from './auth';
import currentCategory from './currentCategory';
import transactions from './transactions';
import currentDate from './currentDate';
import categories from './categories';
import isExpenses from './isExpenses';
import products from './products';
import isModal from './isModal';
import period from './period';
import init from './init';
import error from './error';

const rootReducers = combineReducers({
  currentCategory,
  public: auth,
  transactions,
  currentDate,
  categories,
  isExpenses,
  products,
  isModal,
  period,
  error,
  init,
});
export default rootReducers;
