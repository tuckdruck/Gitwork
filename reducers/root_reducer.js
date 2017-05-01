import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ReposReducer from './repos_reducer';
import IssuesReducer from './issues_reducer';

export default combineReducers({
  session: SessionReducer,
  repos: ReposReducer,
  issues: IssuesReducer
});
