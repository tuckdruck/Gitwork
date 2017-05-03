import React from 'react';

import { connect } from 'react-redux';
import IssueDetailsContainer from './issue_details_container';
import StatusIcon from './status_icon';

class IssueIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false, edit: false, title: this.props.issue.title
    };

    this.toggleIssue = this.toggleIssue.bind(this);
  }

  toggleIssue() {
    this.setState({ open: !this.state.open });
  }

  openDetails() {
    return(
      <IssueDetailsContainer
        issue={this.props.issue}
        toggleIssue={this.toggleIssue}
      />
    );
  }

  closedDetails() {
    return(
      <button className="closed-issue-title" onClick={this.toggleIssue}>
        {this.props.issue.title}
      </button>
    );
  }

  render() {
    return(
      <div className="issue-index-item">
        <StatusIcon status={this.props.issue.state}/>
        {this.state.open ? this.openDetails() : this.closedDetails()}
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};


export default connect(mapStateToProps, null)(IssueIndexItem);
