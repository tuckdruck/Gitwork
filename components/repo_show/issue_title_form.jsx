import React from 'react';

export default class IssueTitle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { edit: false, title: this.props.issue.title };
  }

  update(e) {
    this.setState({ title: e.target.value });
  }

  updateIssue() {
    this.props.updateIssue("title");
  }

  toggleEditTitle() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    if (this.props.edit) {
      return(
        <div className="issue title-open">
          <form className="issue title">
            <input type="text" value={this.state.title} onChange={this.update("title")} />
            <button onClick={this.updateIssue}>Save</button>
          </form>
            <button className="cancel" onClick={this.toggleEditTitle}>Cancel</button>
        </div>
      );

    }
    else {
      return(
        <div className="issue title">
          <button className="closed-issue-title" onClick={this.props.toggleIssue}>{this.props.issue.title}</button>
          <button className="edit" onClick={this.toggleEditTitle}>Edit title</button>
        </div>
      );
    }
  }
}
