import * as types from '../types';

const authReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case types.AUTH_LOGIN_STARTED:
    case types.AUTH_REGISTER_STARTED:
      return { ...state, isLoading: true };
    case types.AUTH_LOGIN_SUCCESS:
    case types.AUTH_REGISTER_SUCCESS:
    case types.AUTH_LOGOUT_SUCCESS:
    case types.AUTH_LOGIN_FAILURE:
    case types.AUTH_REGISTER_FAILURE:
    case types.AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
