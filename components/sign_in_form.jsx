import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", token: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem('username', this.state.username);
    sessionStorage.setItem('token', this.state.token);
    this.props.logIn(this.state);
  }

  tokenInfo() {
    return(
      <span>
        Click&nbsp;
        <a href="https://github.com/blog/1509-personal-api-tokens">
          here
        </a>&nbsp;
        to find out how to generate a personal API token.
      </span>
    );
  }

  usernameInput() {
    return(
      <label >
        <input
          placeholder="Username"
          type="text" value={this.state.username}
          onChange={this.update("username")}
      />
      </label>
    );
  }

  tokenInput() {
    return(
      <label>
        <input
          placeholder="Personal API token"
          type="password"
          value={this.state.token}
          onChange={this.update("token")}
        />
      </label>
    );
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        {this.usernameInput()}
        {this.tokenInput()}
        <button className="login">Sign In</button>
        {this.tokenInfo()}
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => { return dispatch(logIn(user)); }
  };
};

export default connect(null, mapDispatchToProps)(SignInForm);
