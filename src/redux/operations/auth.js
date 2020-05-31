import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';
import INITIAL_STATE from '../INITIAL_STATE';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const authLogin = data => {
  return dispatch => {
    dispatch(actions.Started(types.AUTH_LOGIN_STARTED));
    axios
      .post(API.PostAuthLogin, JSON.stringify(data))
      .then(res => {
        dispatch(actions.Success(types.AUTH_LOGIN_SUCCESS, res.data));
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.user.token}`;
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
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.user.token}`;
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
      .post(API.PostAuthLogout)
      .then(res => {
        dispatch(actions.Success(types.AUTH_LOGOUT_SUCCESS, INITIAL_STATE));
        axios.defaults.headers.common.Authorization = '';
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
