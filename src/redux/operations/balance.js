import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getApiBalance = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_BALANCE_STARTED));
    axios
      .get(API.Balance)
      .then(res => {
        dispatch(
          actions.withPayload(types.GET_BALANCE_SUCCESS, {
            balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_BALANCE_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const postApiBalance = value => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.POST_BALANCE_STARTED));
    axios
      .post(
        API.Balance,
        JSON.stringify({
          amount: value,
        }),
      )
      .then(res => {
        dispatch(
          actions.withPayload(types.POST_BALANCE_SUCCESS, {
            balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.POST_BALANCE_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
