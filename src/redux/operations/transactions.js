import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';

const getTransactions = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.GET_TRANSACTIONS_STARTED));
    axios
      .get(API.Transactions)
      .then(res => {
        console.log(res);
        dispatch(actions.withPayload(types.GET_TRANSACTIONS_SUCCESS, res.data));
      })
      .catch(error =>
        dispatch(
          actions.withPayload(types.GET_TRANSACTIONS_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export default getTransactions;
