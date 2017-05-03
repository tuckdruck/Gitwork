import React from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issue_actions';
import RepoHeader from './repo_header';
import ReactDOM from 'react-dom';

class NewIssueForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    const modal = ReactDOM.findDOMNode(this);
    const outsideModal = !modal.contains(e.target);

    if (outsideModal) {
      this.props.closeModal();
    }
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
      <div className="modal">
        <RepoHeader user={this.props.user} repo={this.props.repo} />
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
