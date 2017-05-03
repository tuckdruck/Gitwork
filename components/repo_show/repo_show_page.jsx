import React from 'react';
import Header from '../header';
import IssuesIndex from './issues_index';
import { connect } from 'react-redux';
import IssueModal from './issue_modal';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import { fetchRepos } from '../../actions/repo_actions';
import Footer from '../footer';
import RepoHeader from './repo_header';
import RepoStats from '../repo_stats';

const RepoShowPage = (props) => {
  if (!props.user) {
    return(<Redirect to="/" />);
  }

  if (!props.user.login) {
    props.logInUser(props.user);
    return(<div></div>);
  }

  if (!props.repo) {
    props.fetchRepos(props.user);
    return(<div></div>);
  }

  return(
    <div>
        <div className="repo-show-wide">
          <div className="repo-show-header">
            <RepoHeader username={props.user.login} repoName={props.repo.name}/>
            <RepoStats repo={props.repo}/>
          </div>
        </div>
      <div className="repo-show-main">

        <div className="repo-description">
          <p>{props.repo.description}</p>
          <div className="issue-header">
            <h2>Issues</h2>
            <IssueModal repo={props.repo}/>
          </div>
          <IssuesIndex repo={props.repo}/>
        </div>
      </div>
      <Footer />
    </div>
  );
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
