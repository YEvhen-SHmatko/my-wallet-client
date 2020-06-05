import axios from 'axios';
import { getLS } from '../../services/localStorage';
import * as actions from '../actions';
import * as types from '../types';
import getTransactions from './transactions';
// import * as income from './income';
import * as product from './product';
import * as category from './category';
// import * as cost from './cost';

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
        .then(() => dispatch(getTransactions()))
        .then(() => dispatch(product.getProducts()))
        .then(() => dispatch(category.getCategories()))
        .catch(err => new Error(err))
        .finally(() =>
          dispatch(actions.withPayload(types.INIT_KAPUSTA_SUCCESS, true)),
        );
    } catch (error) {
      dispatch(actions.withOutPayload(types.INIT_KAPUSTA_FAILURE));
    }
  };
};
export default initKapusta;
