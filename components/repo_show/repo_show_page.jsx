import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logIn } from '../../actions/session_actions';
import { fetchRepos } from '../../actions/repo_actions';

import IssuesIndex from './issues_index';
import NewIssue from './new_issue';
import Footer from '../footer';
import RepoHeader from './repo_header';
import RepoStats from '../repo_stats';


const RepoShowPage = ({ user, repo, logInUser, fetchRepos }) => {
  if (!user) { return(<Redirect to="/" />); }

  if (!user.login) {
    logInUser(user).then(() => (fetchRepos(user));
  }

  if (repo) {
    return(
      <div>
          <div className="repo-show-wide">
            <div className="repo-show-header">
              <RepoHeader username={user.login} repoName={repo.name}/>
              <RepoStats repo={repo}/>
            </div>
          </div>
        <div className="repo-show-main">

          <div className="repo-description">
            <p>{repo.description}</p>
            <div className="issue-header">
              <h2>Issues</h2>
              <NewIssue repo={repo}/>
            </div>
            <IssuesIndex repo={repo}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  else { return (<div></div>); }

}

const mapStateToProps = (state, ownProps) => {
  const repoId = ownProps.match.params.repoId;
  return {
    user: state.session.user,
    repo: state.repos[repoId],
    repos: state.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => { return dispatch(logIn(user)); },
    fetchRepos: (user) => { return dispatch(fetchRepos(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoShowPage);
