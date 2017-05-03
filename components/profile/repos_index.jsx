import React from 'react';
import { connect } from 'react-redux';

import { fetchRepos } from '../../actions/repo_actions';
import reposArray from '../../selectors/repos_selector';

import ReposRow from './repos_row';


class ReposIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRepos(this.props.user);
  }

  repoRows() {
    const { repos } = this.props;
    const repoRows = [];

    for (let i = 0; i < repos.length; i += 2) {
      repoRows.push(<ReposRow key={i} repos={repos.slice(i, i + 2)} />);
    }

    return repoRows;
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
