import React from 'react';
import { connect } from 'react-redux';
import { fetchIssues, receiveIssues } from '../../actions/issue_actions';
import issuesArray from '../../selectors/issues_selector';
import IssueIndexItem from './issue_index_item';
import NewIssue from './new_issue';


class IssuesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.receiveIssues([]);
  }

  componentDidMount() {
    this.props.fetchIssues(this.props.user, this.props.repo);
  }

  issueIndexItems() {
    return this.props.issues.map((issue) => {
      return(<IssueIndexItem key={issue.id} issue={issue}/>);
    });
  }

  render() {
    return(
      <div>
        <div className="issue-header">
          <h2>Issues</h2>
          <NewIssue repo={this.props.repo}/>
        </div>
        <div className="issues-index">{this.issueIndexItems()}</div>
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
    fetchIssues: (user, repo) => { dispatch(fetchIssues(user, repo)); },
    receiveIssues: (issues) => { dispatch(receiveIssues(issues)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesIndex);
