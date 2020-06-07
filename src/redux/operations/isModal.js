import * as actions from '../actions';
import * as types from '../types';

const isLoading = data => {
  return dispatch => {
    dispatch(actions.withPayload(types.SET_IS_MODAL, data));
  };
};
export default isLoading;
