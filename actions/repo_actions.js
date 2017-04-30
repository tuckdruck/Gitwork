export const RECEIVE_REPOS = "RECEIVE_REPOS";
import * as RepoAPIUtil from '../util/repo_api_util';

export const receiveRepos = repos => {
  return {
    type: RECEIVE_REPOS,
    repos: repos
  };
};

export const fetchRepos = user => {
  return (dispatch) => {
    return RepoAPIUtil.fetchRepos(user)
      .then((res) => {
        return res.text();
      })
      .then((json) => {
        const repos = JSON.parse(json);
        const reposObj = {};
        repos.forEach((repo) => { reposObj[repo.id] = repo; });
        return dispatch(receiveRepos(reposObj));
      })
  }
}
