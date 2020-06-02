import * as types from '../types';
import INITIAL_STATE from '../initState';

// const balance = (
//   state = INITIAL_STATE.transaction.balance,
//   { payload, type },
// ) => {
//   switch (type) {
//     case types.GET_BALANCE_STARTED:
//     case types.POST_BALANCE_STARTED:
//     case types.POST_INCOME_STARTED:
//     case types.DELETE_INCOME_STARTED:
//     case types.GET_BALANCE_FAILURE:
//     case types.POST_BALANCE_FAILURE:
//     case types.POST_INCOME_FAILURE:
//     case types.DELETE_INCOME_FAILURE:
//       return state;
//     case types.GET_BALANCE_SUCCESS:
//     case types.POST_BALANCE_SUCCESS:
//     case types.POST_INCOME_SUCCESS:
//     case types.DELETE_INCOME_SUCCESS:
//       return payload;
//     default:
//       return state;
//   }
// };
// const incomes = (
//   state = INITIAL_STATE.transaction.incomes,
//   { payload, type },
// ) => {
//   switch (type) {
//     case types.GET_INCOME_STARTED:
//     case types.GET_INCOME_FAILURE:
//       return state;
//     case types.GET_INCOME_SUCCESS:
//       return payload;
//     default:
//       return state;
//   }
// };
// const products = (
//   state = INITIAL_STATE.transaction.products,
//   { payload, type },
// ) => {
//   switch (type) {
//     case types.GET_PRODUCTS_STARTED:
//     case types.GET_PRODUCTS_FAILURE:
//       return state;
//     case types.GET_PRODUCTS_SUCCESS:
//       return payload;
//     default:
//       return state;
//   }
// };
const transactions = (
  state = INITIAL_STATE.transactions,
  { payload, type },
) => {
  switch (type) {
    case types.GET_TRANSACTIONS_STARTED:
    case types.GET_TRANSACTIONS_FAILURE:
    case types.GET_COSTS_STARTED:
    case types.GET_COSTS_FAILURE:
      return { ...state, ...payload };
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.GET_COSTS_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default transactions;
