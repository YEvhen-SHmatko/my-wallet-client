import axios from 'axios';
import * as actions from '../actions';
import * as types from '../types';
import * as API from '../../services/API';
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const authLogin = data => {
  return dispatch => {
    dispatch(actions.Started(types.AUTH_LOGIN_STARTED));
    axios
      .post(API.PostAuthLogin, JSON.stringify(data))
      .then(res => {
        dispatch(actions.Success(types.AUTH_LOGIN_SUCCESS, { user: res.data }));
      })
      .catch(error =>
        dispatch(
          actions.Failure(types.AUTH_LOGIN_FAILURE, { error: error.message }),
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
        dispatch(
          actions.Success(types.AUTH_REGISTER_SUCCESS, { user: res.data }),
        );
      })
      .catch(error =>
        dispatch(
          actions.Failure(types.AUTH_REGISTER_FAILURE, {
            error: error.message,
          }),
        ),
      );
  };
};

// export const postUser = (url, user) => dispatch => {
//   dispatch(actions.Started(types.POST_USER_STARTED));
//   axios
//     .post(url, user)
//     .then(res => {
//       dispatch(actions.Success(types.POST_USER_SUCCESS, { user: res.data }));
//     })
//     .then(() => {
//       dispatch(getUsers(API.URL));
//     })
//     .catch(error =>
//       dispatch(actions.Failure(types.POST_USER_FAILURE, { error })),
//     );
// };

// export const putUser = (url, user) => dispatch => {
//   dispatch(actions.Started(types.PUT_USER_STARTED));
//   axios
//     .put(url, user)
//     .then(res => {
//       dispatch(actions.Success(types.PUT_USER_SUCCESS, { user: res.data }));
//     })
//     .then(() => {
//       dispatch(getUsers(API.URL));
//     })
//     .catch(error =>
//       dispatch(actions.Failure(types.PUT_USER_FAILURE, { error })),
//     );
// };

// export const deleteUser = (url, user) => dispatch => {
//   dispatch(actions.Started(types.DELETE_USER_STARTED));
//   axios
//     .delete(url, user)
//     .then(res => {
//       dispatch(actions.Success(types.DELETE_USER_SUCCESS, { user: res.data }));
//     })
//     .then(() => {
//       dispatch(getUsers(API.URL));
//     })
//     .catch(error =>
//       dispatch(actions.Failure(types.DELETE_USER_FAILURE, { error })),
//     );
// };
