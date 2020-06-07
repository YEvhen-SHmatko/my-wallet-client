import * as types from '../types';
import INITIAL_STATE from '../initState';

const isLoading = (state = INITIAL_STATE.isModal, { payload, type }) => {
  switch (type) {
    case types.SET_IS_MODAL:
      return payload;
    default:
      return state;
  }
};
export default isLoading;
