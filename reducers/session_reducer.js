import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = { user: null, errors: [] }
const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return { user: action.user, errors: [] };
    case RECEIVE_ERRORS:
      return { user: null, errors: action.errors };
    default:
      return state;
  }
}

export default SessionReducer;
