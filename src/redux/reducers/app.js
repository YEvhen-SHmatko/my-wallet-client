import { combineReducers } from 'redux';
import * as types from '../types';
import INITIAL_STATE from '../initState';

const balance = (state = INITIAL_STATE.app.balance, { payload, type }) => {
  switch (type) {
    case types.GET_BALANCE_STARTED:
    case types.POST_BALANCE_STARTED:
    case types.POST_INCOME_STARTED:
    case types.DELETE_INCOME_STARTED:
    case types.GET_BALANCE_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.POST_INCOME_FAILURE:
    case types.DELETE_INCOME_FAILURE:
      return state;
    case types.GET_BALANCE_SUCCESS:
    case types.POST_BALANCE_SUCCESS:
    case types.POST_INCOME_SUCCESS:
    case types.DELETE_INCOME_SUCCESS:
      return payload;
    default:
      return state;
  }
};
const incomes = (state = INITIAL_STATE.app.incomes, { payload, type }) => {
  switch (type) {
    case types.GET_INCOME_STARTED:
    case types.GET_INCOME_FAILURE:
      return state;
    case types.GET_INCOME_SUCCESS:
      return payload;
    default:
      return state;
  }
};
const products = (state = INITIAL_STATE.app, { payload, type }) => {
  switch (type) {
    case types.GET_PRODUCTS_STARTED:
    case types.GET_PRODUCTS_FAILURE:
      return state;
    case types.GET_PRODUCTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default combineReducers({ balance, incomes, products });
