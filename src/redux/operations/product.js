import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getProducts = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_PRODUCTS_STARTED));
    axios
      .get(API.Products)
      .then(res => {
        dispatch(
          actions.withPayload(types.GET_PRODUCTS_SUCCESS, res.data.products),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_PRODUCTS_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const q = () => null;
