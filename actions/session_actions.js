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
  sessionStorage.clear();
  return {
    type: RECEIVE_USER,
    user: null
  }
}


export const logIn = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.logIn(user)
      .then((res) => {
        if (!res.ok) { throw new Error("Invalid username/API token combination."); }
        const path = res.url.split("/");
        const username = path[path.length - 1];
        return res.text();
      })
      .then((json) => {
        const signedInUser = JSON.parse(json);
        signedInUser["token"] = user.token;
        return dispatch(receiveUser(signedInUser));
      })
      .catch((errors) => {
        return dispatch(receiveErrors([errors.message]));
      })
  }
}
