export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as SessionAPIUtil from '../util/session_api_util';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  }
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  }
}

export const logOut = () => {
  return {
    type: RECEIVE_USER,
    user: null
  }
}


export const logIn = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.logIn(user)
      .then((res) => {
        if (!res.ok) { throw new Error("Invalid username/access token combination."); }
        const path = res.url.split("/");
        const username = path[path.length - 1];
        return dispatch(receiveUser({ username: username, token: user.token}));
      })
      .catch((errors) => {
        return dispatch(receiveErrors([errors.message]));
      })
  }
}

// if(response.ok) {
//   return response.blob();
// }
// throw new Error('Network response was not ok.');
