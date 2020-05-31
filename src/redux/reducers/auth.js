import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const authReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case types.AUTH_LOGIN_STARTED:
    case types.AUTH_REGISTER_STARTED:
    case types.AUTH_LOGIN_FAILURE:
    case types.AUTH_REGISTER_FAILURE:
    case types.AUTH_LOGOUT_FAILURE:
      return state;
    case types.AUTH_LOGIN_SUCCESS:
    case types.AUTH_REGISTER_SUCCESS:
      return {
        ...payload,
        isLogin: true,
      };
    case types.AUTH_LOGOUT_SUCCESS:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
export default authReducer;
