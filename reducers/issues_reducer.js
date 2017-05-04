import { RECEIVE_ISSUES, RECEIVE_ISSUE } from '../actions/issue_actions';

const defaultState = {};
const IssuesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case RECEIVE_ISSUES:
      newState = {};
      action.issues.forEach((issue) => {
        newState[issue.id] = issue;
      });
      return newState;
    case RECEIVE_ISSUE:
      newState = Object.assign({}, state);
      newState[action.issue.id] = action.issue;
      return newState;
    default:
      return state;
  }
};

export default IssuesReducer;
