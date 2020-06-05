import * as types from '../types';
import INITIAL_STATE from '../initState';

const authReducer = (state = INITIAL_STATE.public, { payload, type }) => {
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
        status: payload.status,
        fullName: payload.user.userData.name.fullName,
        session: payload.user.token,
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
