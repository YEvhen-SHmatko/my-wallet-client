import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getCosts = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_COSTS_STARTED));
    axios
      .get(API.Transactions)
      .then(res => {
        dispatch(
          actions.withPayload(types.GET_COSTS_SUCCESS, {
            costs: res.data.costs,
          }),
        );
      })
      .catch(error =>
        dispatch(actions.withPayload(types.GET_COSTS_FAILURE, {})),
      );
  };
};
export const postCost = (productId, amount, date) => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.POST_COSTS_STARTED));
    axios
      .post(
        API.Costs,
        JSON.stringify({
          date,
          product: {
            productId,
            amount,
            date,
          },
        }),
      )
      .then(res => {
        dispatch(
          actions.withPayload(types.POST_COSTS_SUCCESS, {
            // balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.POST_COSTS_FAILURE, {
            status: error.message,
          }),
        ),
      )
      .finally(() => dispatch(getCosts()));
  };
};
export const deleteCost = id => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.DELETE_COSTS_STARTED));
    axios
      .delete(`${API.Costs}/${id}`)
      .then(res => {
        dispatch(
          actions.withPayload(types.DELETE_COSTS_SUCCESS, {
            balance: res.data.balance,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.DELETE_COSTS_FAILURE, {
            // status: error.message,
          }),
        ),
      )
      .finally(() => dispatch(getCosts()));
  };
};
