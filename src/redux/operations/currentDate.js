import * as actions from '../actions';
import * as types from '../types';

const currentDate = data => {
  return dispatch => {
    dispatch(actions.withPayload(types.SET_CURRENT_DATE, data));
  };
};
export default currentDate;
