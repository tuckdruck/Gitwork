import React from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issue_actions';
import RepoHeader from './repo_header';

class NewIssueForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createIssue(this.props.user, this.state, this.props.repo);
    this.props.closeModal();
  }

  render() {
    return(
      <div>
        <RepoHeader username={this.props.user.login} repoName={this.props.repo.name} />
        <section className="new-form-container">
          <img className="avatar-small" src={this.props.user.avatar_url} alt="avatar" />
          <form className="new-issue">
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")} />
            <textarea className="description" type="text" placeholder="Description" value={this.state.description} onChange={this.update("body")} />
            <button className="new-issue" onClick={this.handleSubmit}>Submit new issue</button>
          </form>
        </section>
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
    createIssue: (user, issue, repo) => { return dispatch(createIssue(user, issue, repo)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewIssueForm);
