import * as types from '../types';
import INITIAL_STATE from '../initState';

const categories = (state = INITIAL_STATE.categories, { payload, type }) => {
  switch (type) {
    case types.GET_CATEGORIES_STARTED:
    case types.GET_CATEGORIES_FAILURE:
      return state;
    case types.GET_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default categories;
