import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import { Redirect } from 'react-router-dom';

const logOutLink = func => {
  return() => { func().then(() => { browserHistory.push("/"); }); }
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logOut();
  }

  render() {
    let logOutLink = "";
    if (this.props.loggedIn) {
      logOutLink = (<button onClick={this.handleClick}>Log Out</button>);
    }
    if (this.state.shouldRedirect) {
      return(<Redirect to="/"/>)
    }
    return(
      <header>
        <nav>
          <div>
            <img src="images/inverted-cat.png" alt="gitwork-logo"/>
            <h1>GitWork</h1>
          </div>
          {logOutLink}
        </nav>

      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => { return dispatch(logOut()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
