import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

export const getCategories = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_CATEGORIES_STARTED));
    axios
      .get(API.Categories)
      .then(res => {
        dispatch(
          actions.withPayload(
            types.GET_CATEGORIES_SUCCESS,
            res.data.categories,
          ),
        );
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_CATEGORIES_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const q = () => null;
