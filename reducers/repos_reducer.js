import { RECEIVE_REPOS } from '../actions/repo_actions';

const defaultState = {};
const ReposReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REPOS:
      return action.repos;
    default:
      return state;
  }
}

export default ReposReducer;
