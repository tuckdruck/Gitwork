import React from 'react';

import { connect } from 'react-redux';
import IssueBody from './issue_body';

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
      title = (<IssueBody issue={this.props.issue} toggleIssue={this.toggleIssue}/>);
    }
    else {
      title = (<button onClick={this.toggleIssue}>{this.props.issue.title}</button>);
    }

    return(<div>{title}</div>);
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};



export default connect(mapStateToProps, null)(IssueIndexItem);
