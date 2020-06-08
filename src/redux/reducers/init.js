import * as types from '../types';
import INITIAL_STATE from '../initState';

const initReducer = (state = INITIAL_STATE.init, { type }) => {
  switch (type) {
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.GET_CATEGORIES_SUCCESS:
    case types.GET_PRODUCTS_SUCCESS:
      return true;
    case types.GET_TRANSACTIONS_FAILURE:
    case types.GET_CATEGORIES_FAILURE:
    case types.GET_PRODUCTS_FAILURE:
    case types.AUTH_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};
export default initReducer;
