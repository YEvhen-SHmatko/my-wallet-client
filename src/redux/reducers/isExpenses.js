import * as types from '../types';
import INITIAL_STATE from '../initState';

const isExpenses = (state = INITIAL_STATE.isExpenses, { payload, type }) => {
  switch (type) {
    case types.SET_IS_EXPENSES:
      return payload;
    default:
      return state;
  }
};
export default isExpenses;
