import React from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions/issue_actions';
import issuesArray from '../selectors/issues_selector';
import IssueIndexItem from './issue_index_item';


class IssuesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIssues(this.props.user, this.props.repo);
  }

  render() {
    const issues = this.props.issues.map((issue) => {
      return(<IssueIndexItem key={issue.id} issue={issue}/>);
    });
    return(
      <div>
        {issues}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.session.user,
    issues: issuesArray(state.issues)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchIssues: (user, repo) => { dispatch(fetchIssues(user, repo)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesIndex);
