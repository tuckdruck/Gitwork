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


class RepoShowPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.user && !this.props.user.login) {
      this.props.logInUser(this.props.user)
        .then(() => (this.props.fetchRepos(this.props.user)));
    }
  }

  repoDescription() {
    return(<p>{this.props.repo.description}</p>);
  }

  render() {
    const { user, repo } = this.props;

    if (!user) { return(<Redirect to="/" />); }
    if (!repo) { return(<div></div>); }

    return(
      <div className="repo-show">
        <RepoHeader user={user} repo={repo}/>
        <div className="main">
          {this.repoDescription()}<IssuesIndex repo={repo}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const repoId = ownProps.match.params.repoId;
  return {
    user: state.session.user,
    repo: state.repos[repoId],
    repos: state.repos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => { return dispatch(logIn(user)); },
    fetchRepos: (user) => { return dispatch(fetchRepos(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoShowPage);
