export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const RECEIVE_ISSUE = "RECEIVE_ISSUE";
import * as IssueAPIUtil from '../util/issue_api_util';

export const receiveIssues = issues => {
  const onlyIssues = issues.filter((issue) => { return !issue.pull_request });
  return {
    type: RECEIVE_ISSUES,
    issues: onlyIssues
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

export const createIssue = (user, issue, repo) => {
  return (dispatch) => {
    return IssueAPIUtil.createIssue(user, issue, repo)
      .then((res) => { return res.text() })
      .then((json) => {
        const createdIssue = JSON.parse(json);
        return dispatch(receiveIssue(createdIssue));
      })
  }
};
