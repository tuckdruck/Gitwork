import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';
import Header from './header';

class SignIn extends React.Component {

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

  render() {
    return(
      <main className="landing-container">
        <Header />
        <main className="landing">
          <div className="promo">
            <h1>Built for developers.</h1>
            <p>
              {"Gitwork is an application for accessing your Github profile information and repositories, and managing your repositories' issues. It is built on top of the Github API."}
            </p>
          </div>
          <div className="login">
            <div className="errors">{this.props.errors}</div>
          <form onSubmit={this.handleSubmit}>
            <label >
              <input placeholder="Username" type="text" value={this.state.username} onChange={this.update("username")} />
            </label>

            <label>
              <input placeholder="Personal API token" type="password" value={this.state.token} onChange={this.update("token")}/>
            </label>

            <button className="login">Sign In</button>
            <span>Click <a href="https://github.com/blog/1509-personal-api-tokens">here</a> to find out how to generate a personal API token.</span>
          </form>
          </div>
        </main>
      </main>

    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => { return dispatch(logIn(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
