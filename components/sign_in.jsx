import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';

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
    this.props.logIn(this.state);
  }

  render() {
    return(
      <main className="landing-container">
        <main className="landing">
          <div>
            <h1>Built for developers.</h1>
            <p>
              {"Gitwork is a single-page application for accessing your Github profile information and repositories, and managing your repositories' issues. It is built on the Github API."}
            </p>
          </div>
          <div>
            {this.props.errors}
          <form onSubmit={this.handleSubmit}>
            <label >
              <input placeholder="Username" type="text" value={this.state.username} onChange={this.update("username")} />
            </label>

            <label>
              <input placeholder="Personal access token" type="password" value={this.state.token} onChange={this.update("token")}/>
            </label>

            <button className="login">Sign In</button>
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
