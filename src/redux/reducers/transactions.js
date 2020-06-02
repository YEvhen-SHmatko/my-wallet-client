import * as types from '../types';
import INITIAL_STATE from '../initState';

const transactions = (
  state = INITIAL_STATE.transactions,
  { payload, type },
) => {
  switch (type) {
    case types.GET_TRANSACTIONS_STARTED:
    case types.GET_TRANSACTIONS_FAILURE:
    case types.GET_BALANCE_STARTED:
    case types.POST_BALANCE_STARTED:
    case types.GET_BALANCE_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.GET_BALANCE_SUCCESS:
    case types.POST_BALANCE_SUCCESS:
    case types.GET_COSTS_STARTED:
    case types.GET_COSTS_FAILURE:
    case types.POST_COSTS_STARTED:
    case types.POST_COSTS_FAILURE:
    case types.DELETE_COSTS_STARTED:
    case types.DELETE_COSTS_FAILURE:
    case types.GET_INCOME_STARTED:
    case types.GET_INCOME_FAILURE:
    case types.POST_INCOME_STARTED:
    case types.POST_INCOME_FAILURE:
    case types.DELETE_INCOME_STARTED:
    case types.DELETE_INCOME_FAILURE:
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.GET_COSTS_SUCCESS:
    case types.POST_COSTS_SUCCESS:
    case types.DELETE_COSTS_SUCCESS:
    case types.GET_INCOME_SUCCESS:
    case types.POST_INCOME_SUCCESS:
    case types.DELETE_INCOME_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default transactions;
