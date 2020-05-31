import * as types from '../types';

const initialState = {
  status: '',
  session: '',
  user: {
    name: {
      fullName: '',
      firstName: '',
      lastName: '',
    },
    email: '',
    photo: '',
    userNew: false,
  },
  isLoading: false,
};
const authReducer = (state = initialState, { payload, type }) => {
  const newState = payld => ({
    ...state,
    status: payld.status,
    session: payld.user.token,
    user: payld.user.userData,
  });
  switch (type) {
    case types.AUTH_LOGIN_STARTED:
    case types.AUTH_REGISTER_STARTED:
      return { ...state, isLoading: true };
    case types.AUTH_LOGIN_SUCCESS:
    case types.AUTH_REGISTER_SUCCESS:
      return {
        ...newState(payload),
        isLoading: false,
      };
    case types.AUTH_LOGIN_FAILURE:
    case types.AUTH_REGISTER_FAILURE:
      return {
        ...newState(payload),
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
