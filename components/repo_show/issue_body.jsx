import React from 'react';
import { updateIssue } from '../../actions/issue_actions';
import StatusIcon from './status_icon';
import capitalize from '../../util/capitalize';


export default class IssueBody extends React.Component {


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


  updateIssue(type) {
    return(e) => {
      e.preventDefault();
      const newIssue = this.props.issue;
      newIssue[type] = this.state[type];

      this.props.updateIssue(
        this.props.user, this.props.issue, { [type]: this.state[type] }
      );

      this.setState({ ["edit" + capitalize(type)]: false });
    }
  }


  date() {
    const dateArr = this.props.issue.created_at.slice(0, 10).split("-");
    const year = dateArr.shift();
    return dateArr.concat(year).join("/");
  }

  title() {
    return(<IssueTitle issue={this.props.issue} updateIssue={this.props.updateIssue} edit={false} toggleIssue={this.props.toggleIssue}/>);
  }

  render() {
    let openedText = (<span>opened {this.date()} by {this.props.user.login}</span>);
    let bodyText;

    if (this.state.editBody) {
      bodyText = (
        <div className="issue-body">
          <form>
            <textarea onChange={this.update("body")} value={this.state.body} />
            <button className="update" onClick={this.updateIssue("body")}>Update</button>
          </form>
          <button className="cancel" onClick={this.toggleEditBody}>Cancel</button>
        </div>
      );
    }
    else {
      bodyText = (
        <div className="issue-body closed">
          {this.props.issue.body}
        </div>
      );
    }

    return(
      <div className="issue-details">
        {this.title()}
        {openedText}
        <div className="issue-description-header">
          <h3>Description</h3>
          <button className="edit-issue-description" onClick={this.toggleEditBody}>(edit)</button>
        </div>
        {bodyText}
        {this.toggleStatusButton()}
      </div>
    );
  }

}
