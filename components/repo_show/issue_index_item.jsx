import React from 'react';

import { connect } from 'react-redux';
import IssueBodyContainer from './issue_body_container';
import StatusIcon from './status_icon';

class IssueIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, edit: false, title: this.props.issue.title };

    this.toggleIssue = this.toggleIssue.bind(this);
  }

  toggleIssue() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let title;
    if (this.state.open) {
      title = (<IssueBodyContainer issue={this.props.issue} toggleIssue={this.toggleIssue}/>);
    }
    else {
      title = (
        <button className="closed-issue-title" onClick={this.toggleIssue}>

          {this.props.issue.title}
        </button>
      );
    }

    return(
      <div className="issue-index-item"><StatusIcon status={this.props.issue.state}/>{title}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};



export default connect(mapStateToProps, null)(IssueIndexItem);
