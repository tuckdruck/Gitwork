import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/repo_actions';
import reposArray from '../selectors/repos_selector';
import RepoIndexItem from './repo_index_item';

class ReposIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRepos(this.props.user);
  }

  render() {
    const repoIndexItems = this.props.repos.map((repo, i) => {
      return(<RepoIndexItem key={i} repo={repo}/>);
    });
    return(
      <div className="repos">
        {repoIndexItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: reposArray(state.repos),
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: (user) => { return dispatch(fetchRepos(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReposIndex);
