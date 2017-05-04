import React from 'react';
import { connect } from 'react-redux';

import { fetchRepos } from '../../actions/repo_actions';
import reposArray from '../../selectors/repos_selector';
import RepoIndexItem from './repo_index_item';


class ReposIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRepos(this.props.user);
  }

  repoRows() {
    const rows = [];

    for (let i = 0; i < this.props.repos.length; i += 2) {
      const leftRepo = this.props.repos[i];
      const rightRepo = this.props.repos[i + 1];
      rows.push(
        <div key={i} className="repo-row">
          <RepoIndexItem key={i} repo={leftRepo} />
          <RepoIndexItem key={i + 1} repo={rightRepo} />
        </div>
      );
    }
    return rows;
  }

  render() {
    return(
      <div className="repos">
        <h2>Repositories</h2>
        {this.repoRows()}
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
