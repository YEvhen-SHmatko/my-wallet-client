import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';
import { getLS, setLS, removeLS } from '../../services/localStorage';
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const authLogin = data => {
  return dispatch => {
    dispatch(actions.Started(types.AUTH_LOGIN_STARTED));
    axios
      .post(API.PostAuthLogin, JSON.stringify(data))
      .then(res => {
        dispatch(actions.Success(types.AUTH_LOGIN_SUCCESS, res.data));
        setLS('session', res.data.user.token);
      })
      .catch(error =>
        dispatch(
          actions.Failure(types.AUTH_LOGIN_FAILURE, { status: error.message }),
        ),
      );
  };
};

export const authRegister = data => {
  return dispatch => {
    dispatch(actions.Started(types.AUTH_REGISTER_STARTED));
    axios
      .post(API.PostAuthRegister, JSON.stringify(data))
      .then(res => {
        dispatch(actions.Success(types.AUTH_REGISTER_SUCCESS, res.data));
        setLS('session', res.data.user.token);
      })
      .catch(error =>
        dispatch(
          actions.Failure(types.AUTH_REGISTER_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
export const authLogout = data => {
  return dispatch => {
    dispatch(actions.Started(types.AUTH_LOGOUT_STARTED));
    axios
      .post(
        API.PostAuthLogout,
        {},
        { headers: { Authorization: `Bearer ${getLS('session')}` } },
      )
      .then(res => {
        dispatch(actions.Success(types.AUTH_LOGOUT_SUCCESS, {}));
        removeLS('session');
      })
      .catch(error =>
        dispatch(
          actions.Failure(types.AUTH_LOGOUT_FAILURE, {
            status: error.message,
          }),
        ),
      );
  };
};
