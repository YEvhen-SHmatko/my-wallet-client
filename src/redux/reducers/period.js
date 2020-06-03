import * as types from '../types';
import INITIAL_STATE from '../initState';

const period = (state = INITIAL_STATE.period, { payload, type }) => {
  switch (type) {
    case types.SET_PERIOD:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default period;
