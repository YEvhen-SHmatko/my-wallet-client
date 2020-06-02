import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getIncomes = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_INCOME_STARTED));
    axios
      .get(API.Income)
      .then(res => {
        dispatch(
          actions.withPayload(types.GET_INCOME_SUCCESS, {
            income: res.data.incomes,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_INCOME_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const postIncome = amount => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.POST_INCOME_STARTED));
    axios
      .post(
        API.Income,
        JSON.stringify({
          amount,
          date: new Date(),
        }),
      )
      .then(res => {
        dispatch(
          actions.withPayload(types.POST_INCOME_SUCCESS, {
            balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.POST_INCOME_FAILURE, {
            status: error.message,
          }),
        ),
      )
      .finally(() => dispatch(getIncomes()));
  };
};
export const deleteIncome = id => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.DELETE_INCOME_STARTED));
    axios
      .delete(`${API.Income}/${id}`)
      .then(res => {
        dispatch(
          actions.withPayload(types.DELETE_INCOME_SUCCESS, {
            balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.DELETE_INCOME_FAILURE, {
            status: error.message,
          }),
        ),
      )
      .finally(() => dispatch(getIncomes()));
  };
};
