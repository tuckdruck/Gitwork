export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const RECEIVE_ISSUE = "RECEIVE_ISSUE";
import * as IssueAPIUtil from '../util/issue_api_util';

export const receiveIssues = issues => {
  return {
    type: RECEIVE_ISSUES,
    issues: issues
  };
};

export const receiveIssue = issue => {
  return {
    type: RECEIVE_ISSUE,
    issue: issue
  };
};

export const fetchIssues = (user, repo) => {
  return (dispatch) => {
    return IssueAPIUtil.fetchIssues(user, repo)
      .then((res) => { return res.text(); })
      .then((json) => {
        const issues = JSON.parse(json);
        return dispatch(receiveIssues(issues));
      });
  };
};

export const updateIssue = (user, issue, params) => {
  return (dispatch) => {
    return IssueAPIUtil.updateIssue(user, issue, params)
      .then((res) => {
        return res.text();
      })
      .then((json) => {
        const editedIssue = JSON.parse(json);
        return dispatch(receiveIssue(editedIssue));
      });
  };
};
