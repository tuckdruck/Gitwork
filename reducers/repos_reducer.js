import { RECEIVE_REPOS } from '../actions/repo_actions';

const defaultState = {};
const ReposReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REPOS:
      const reposObj = {};
      repos.forEach((repo) => { reposObj[repo.id] = repo; })
      return reposObj;
    default:
      return state;
  }
}

export default ReposReducer;
