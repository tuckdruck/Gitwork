import React from 'react';

import StatusIcon from './status_icon';
import capitalize from '../../util/capitalize';
import IssueTitle from './issue_title';
import IssueBody from './issue_body';


export default class IssueDetails extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      editTitle: false, editBody: false,
      body: this.props.issue.body, title: this.props.issue.title
    };

    this.bindFunctions();
  }


  bindFunctions() {
    this.update = this.update.bind(this);

    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.toggleEditBody = this.toggleEditBody.bind(this);

    this.updateIssue = this.updateIssue.bind(this);

    this.toggleIssueState = this.toggleIssueState.bind(this);
  }


  toggleStatusButton() {
    const { issue } = this.props;
    const action = (issue.state === "open") ? "Close " : "Reopen ";

    return(
      <button className="toggle-state" onClick={this.toggleIssueState}>
        {action}issue
      </button>
    );
  }


  update(type) {
    return(e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  toggleEditBody() {
    this.setState({ editBody: !this.state.editBody });
  }


  toggleEditTitle() {
    this.setState({ editTitle: !this.state.editTitle });
  }


  toggleIssueState() {
    const { issue } = this.props;

    const newState = issue.state === "open" ? "closed" : "open";

    this.props.updateIssue(
      this.props.user, this.props.issue, { state: newState }
    );
  }


  updateIssue(type, value) {
    const newIssue = this.props.issue;
    newIssue[type] = this.state[type];

    this.props.updateIssue(
      this.props.user, this.props.issue, { [type]: value }
    );

    this.setState({ [`edit${capitalize(type)}`]: false });
  }


  date() {
    const dateArr = this.props.issue.created_at.slice(0, 10).split("-");
    const year = dateArr.shift();
    return dateArr.concat(year).join("/");
  }

  title() {
    return(
      <IssueTitle
        issue={this.props.issue}
        updateIssue={this.updateIssue}
        edit={false}
        toggleIssue={this.props.toggleIssue}
      />
    );
  }

  body() {
    return(
      <IssueBody
        issue={this.props.issue}
        updateIssue={this.updateIssue}
      />
    );
  }

  render() {
    return(
      <div className="issue-details">
        {this.title()}
        <span>opened {this.date()} by {this.props.user.login}</span>
        {this.body()}
        {this.toggleStatusButton()}
      </div>
    );
  }

}
