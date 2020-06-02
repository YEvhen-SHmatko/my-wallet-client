import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getCosts = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_COSTS_STARTED));
    axios
      .get(API.Costs)
      .then(res => {
        console.log(res);
        dispatch(
          actions.withPayload(types.GET_COSTS_SUCCESS, {
            costs: res.data.costs,
          }),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_COSTS_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const postCost = (productId, amount) => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.POST_COSTS_STARTED));
    axios
      .post(
        API.Costs,
        JSON.stringify({
          date: new Date(),
          product: {
            productId,
            amount,
            date: new Date(),
          },
        }),
      )
      .then(res => {
        dispatch(
          actions.withPayload(types.POST_COSTS_SUCCESS, {
            costs: res.data.costs,
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
      .finally(dispatch(getCosts()));
  };
};
export const deleteCost = id => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.DELETE_COSTS_STARTED));
    axios
      .delete(`${API.Income}/${id}`)
      .then(res => {
        dispatch(actions.withPayload(types.DELETE_COSTS_SUCCESS));
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.DELETE_COSTS_FAILURE, {
            status: error.message,
          }),
        ),
      )
      .finally(dispatch(getCosts()));
  };
};
