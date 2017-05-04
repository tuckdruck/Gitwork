import React from 'react';


export default class IssueBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = { edit: false, body: this.props.issue.body };
    this.update = this.update.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
  }

  update(e) {
    this.setState({ body: e.target.value });
  }

  updateIssue(e) {
    e.preventDefault();
    this.props.updateIssue("body", this.state.body);
    this.setState({ edit: false });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
    if (!this.state.edit) {
      this.setState({ body: this.props.issue.body });
    }
  }

  cancelButton() {
    return(
      <button className="cancel" onClick={this.toggleEdit}>
        Cancel
      </button>
    );
  }

  updateButton() {
    return(
      <button className="update" onClick={this.updateIssue}>
        Update
      </button>
    );
  }

  bodyForm() {
    return(
      <div className="issue-body">
        <form>
          <textarea onChange={this.update} value={this.state.body} />
          {this.updateButton()}
        </form>
        {this.cancelButton()}
      </div>
    );
  }

  bodyText() {
    if (this.state.edit) {
      return this.bodyForm();
    }
    else {
      return(
        <div className="issue-body closed">{this.props.issue.body}</div>
      );
    }
  }

  editButton() {
    return(
      <button className="edit-issue-description"
              onClick={this.toggleEdit}
      >
        (edit)
      </button>
    );
  }

  header() {
    return(
      <div className="issue-description-header">
        <h3>Description</h3>
        {this.editButton()}
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.header()}
        {this.bodyText()}
      </div>
    );
  }

}
