import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions';

let defaultState = { user: null, errors: [] }

const storedUsername = sessionStorage.getItem('username');
const storedToken = sessionStorage.getItem('token');


if (storedUsername && storedToken) {
  defaultState.user =  { username: storedUsername, token: storedToken };
}


const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      if (action.user) {
        sessionStorage.setItem('username', action.user.login);
        sessionStorage.setItem('token', action.user.token);
      }
      return { user: action.user, errors: [] };
    case RECEIVE_ERRORS:
      return { user: null, errors: action.errors };
    default:
      return state;
  }
}

export default SessionReducer;
