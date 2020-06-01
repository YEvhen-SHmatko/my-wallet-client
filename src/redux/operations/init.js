import axios from 'axios';
import { getLS } from '../../services/localStorage';
import * as actions from '../actions';
import * as types from '../types';
import * as balance from './balance';
import * as income from './income';
import * as product from './product';

const init = () => {
  const session = `Bearer ${
    JSON.parse(getLS('persist:kapusta').public).session
  }`;

  return Promise.resolve(session);
};
const initKapusta = () => {
  return dispatch => {
    dispatch(actions.withOutPayload(types.INIT_KAPUSTA_STARTED));
    try {
      init()
        .then(res => {
          axios.defaults.headers.common.Authorization = res;
        })
        .then(() => dispatch(balance.getBalance()))
        .then(() => dispatch(income.getIncomes()))
        .then(() => dispatch(product.getProducts()))
        .catch(err => new Error(err))
        .finally(() =>
          dispatch(actions.withPayload(types.INIT_KAPUSTA_SUCCESS, true)),
        );
    } catch (error) {
      dispatch(actions.withOutPayload(types.GET_BALANCE_FAILURE));
    }
  };
};
export default initKapusta;
