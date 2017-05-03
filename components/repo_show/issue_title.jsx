import React from 'react';


export default class IssueTitle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { edit: false, title: this.props.issue.title };

    this.update = this.update.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
  }

  update(e) {
    this.setState({ title: e.target.value });
  }

  updateIssue(e) {
    e.preventDefault();
    this.props.updateIssue("title", this.state.title);
    this.setState({ edit: false });
  }

  toggleEditTitle() {
    this.setState(
      { edit: !this.state.edit, title: this.props.issue.title }
    );
  }

  issueTitleForm() {
    return(
      <div className="issue title-open">
        <form className="issue title">
          <input value={this.state.title} onChange={this.update} />
          <button onClick={this.updateIssue}>Save</button>
        </form>
        <button onClick={this.toggleEditTitle}>Cancel</button>
      </div>
    );
  }

  closedIssueTitle() {
    return(
      <button className="title" onClick={this.props.toggleIssue}>
        {this.props.issue.title}
      </button>
    );
  }

  closedIssueHeader() {
    return(
      <div className="issue title closed">
        {this.closedIssueTitle()}
        <button className="edit" onClick={this.toggleEditTitle}>
          Edit title
        </button>
      </div>
    );
  }

  render() {
    if (this.state.edit) { return(this.issueTitleForm()); }
    else { return this.closedIssueHeader(); }
  }

}
