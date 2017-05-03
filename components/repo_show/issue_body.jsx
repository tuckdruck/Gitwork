import React from 'react';
import { connect } from 'react-redux';
import { updateIssue } from '../../actions/issue_actions';
import StatusIcon from './status_icon';

class IssueBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = { editTitle: false, editBody: false, body: this.props.issue.body, title: this.props.issue.title };

    this.update = this.update.bind(this);

    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.toggleEditBody = this.toggleEditBody.bind(this);

    this.updateIssueTitle = this.updateIssueTitle.bind(this);
    this.updateIssueBody = this.updateIssueBody.bind(this);

    this.toggleIssueState = this.toggleIssueState.bind(this);

    this.toggleIssueButton = this.toggleIssueButton.bind(this);
  }

  toggleIssueButton() {
    const buttonText = this.props.issue.state === "open" ? "Close issue" : "Reopen issue";
    return(<button className="toggle-state" onClick={this.toggleIssueState}>{buttonText}</button>)
  }


  updateIssueTitle(e) {
    e.preventDefault();
    const newIssue = this.props.issue;
    newIssue["title"] = this.state.title;
    this.props.updateIssue(this.props.user, this.props.issue, { title: this.state.title });
    this.setState({ editTitle: false });
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
    const newState = this.props.issue.state === "open" ? "closed" : "open";
    this.props.updateIssue(this.props.user, this.props.issue, { state: newState });
  }

  updateIssueBody(e) {
    e.preventDefault();
    const newIssue = this.props.issue;
    newIssue["body"] = this.state.body;
    this.props.updateIssue(this.props.user, this.props.issue, { body: this.state.body });
    this.setState({ editBody: false });
  }

  date() {
    let date = this.props.issue.created_at.slice(0, 10).split("-");
    const year = date.shift();
    date = date.concat(year).join("/");
    return date;
  }

  render() {
    let title;
    let openedText = (<span>opened {this.date()} by {this.props.user.login}</span>);
    let bodyText;

    if (this.state.editTitle) {
      title = (
        <div className="issue title-open">
          <form className="issue title">
            <input type="text" value={this.state.title} onChange={this.update("title")} />
            <button onClick={this.updateIssueTitle}>Save</button>
          </form>
            <button className="cancel" onClick={this.toggleEditTitle}>Cancel</button>
        </div>
      );
    }
    else {
      title = (
        <div className="issue title">
          <button className="closed-issue-title" onClick={this.props.toggleIssue}>{this.props.issue.title}</button>
          <button className="edit" onClick={this.toggleEditTitle}>Edit title</button>
        </div>
      );
    }

    if (this.state.editBody) {
      bodyText = (
        <div className="issue-body">
          <form>
            <textarea onChange={this.update("body")} value={this.state.body} />
            <button className="update" onClick={this.updateIssueBody}>Update</button>
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
        {title}
        {openedText}
        <div className="issue-description-header">
          <h3>Description</h3>
          <button className="edit-issue-description" onClick={this.toggleEditBody}>(edit)</button>
        </div>
        {bodyText}
        {this.toggleIssueButton()}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateIssue: (user, issue, params) => { dispatch(updateIssue(user, issue, params)); }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(IssueBody);
