import * as types from '../types';
import INITIAL_STATE from '../initState';

const products = (state = INITIAL_STATE.products, { payload, type }) => {
  switch (type) {
    case types.GET_PRODUCTS_STARTED:
    case types.GET_PRODUCTS_FAILURE:
      return state;
    case types.GET_PRODUCTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default products;
