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

const parseUser = (json, input) => {
  const userInfo = JSON.parse(json);
  userInfo["token"] = input.token;
  return userInfo;
}

const logInError = () => {
  return new Error("Invalid username/API token combination.");
}


export const logIn = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.logIn(user)
      .then((res) => {
        if (!res.ok) { throw logInError(); }
        return res.text();
      })
      .then((json) => (dispatch(receiveUser(parseUser(json, user)))))
      .catch((errors) => (dispatch(receiveErrors([errors.message]))));
  };
};
