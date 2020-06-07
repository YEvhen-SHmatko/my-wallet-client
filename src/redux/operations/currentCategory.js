import * as actions from '../actions';
import * as types from '../types';

const currentCategory = data => {
  return dispatch => {
    dispatch(actions.withPayload(types.SET_CURRENT_CATEGORY, data));
  };
};
export default currentCategory;
