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

  render() {
    const repoIndexItems = [];
    for (let i = 0; i < this.props.repos.length; i += 2) {
      let nextRepo = "";
      if (this.props.repos[i + 1]) {
        nextRepo = (<RepoIndexItem key={i + 1} repo={this.props.repos[i + 1]}/>)
      }
      repoIndexItems.push(
        <div className="repos-row" key={i}>
          <RepoIndexItem key={i} repo={this.props.repos[i]}/>
          {nextRepo}
        </div>
      );
    }

    return(
      <div className="repos">
        <h2>Repositories</h2>
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
