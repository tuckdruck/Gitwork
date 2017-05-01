import React from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../actions/issue_actions';

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
        <h1>
          <svg width="12px" height="16px" viewBox="0 0 12 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>repo</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Octicons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="repo" fill="#000000">
                      <path d="M4,9 L3,9 L3,8 L4,8 L4,9 L4,9 Z M4,6 L3,6 L3,7 L4,7 L4,6 L4,6 Z M4,4 L3,4 L3,5 L4,5 L4,4 L4,4 Z M4,2 L3,2 L3,3 L4,3 L4,2 L4,2 Z M12,1 L12,13 C12,13.55 11.55,14 11,14 L6,14 L6,16 L4.5,14.5 L3,16 L3,14 L1,14 C0.45,14 0,13.55 0,13 L0,1 C0,0.45 0.45,0 1,0 L11,0 C11.55,0 12,0.45 12,1 L12,1 Z M11,11 L1,11 L1,13 L3,13 L3,12 L6,12 L6,13 L11,13 L11,11 L11,11 Z M11,1 L2,1 L2,10 L11,10 L11,1 L11,1 Z" id="Shape"></path>
                  </g>
              </g>
          </svg>
          {this.props.user.login}/{repo.name}</h1>
        <section>
          <img className="avatar-small" src={this.props.user.avatar_url} alt="avatar" />
        <form>
          <input type="text" value={this.state.title} onChange={this.update("title")} />
          <input type="text" value={this.state.description} onChange={this.update("body")} />
          <button onClick={this.handleSubmit}>Submit new issue</button>
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
