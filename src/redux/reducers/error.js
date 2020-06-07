import * as types from '../types';
import INITIAL_STATE from '../initState';

const error = (state = INITIAL_STATE.error, { payload, type }) => {
  switch (type) {
    case types.INIT_KAPUSTA_FAILURE:
    case types.POST_COSTS_FAILURE:
    case types.GET_TRANSACTIONS_FAILURE:
    case types.GET_BALANCE_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.GET_COSTS_FAILURE:
    case types.DELETE_COSTS_FAILURE:
    case types.GET_INCOME_FAILURE:
    case types.POST_INCOME_FAILURE:
    case types.DELETE_INCOME_FAILURE:
      return payload;
    default:
      return state;
  }
};

export default error;
