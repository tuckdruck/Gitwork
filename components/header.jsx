import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import { Redirect } from 'react-router-dom';


const Header = ({ logOut, loggedIn }) => {
  let logOutLink = "";
  if (loggedIn) {
    logOutLink = (<button onClick={logOut}>Log Out</button>);
  }

  return(
    <header>
      <nav className="header">
        <div>
          <img src="images/inverted-cat.png" alt="gitwork-logo"/>
          <h1>GitWork</h1>
        </div>
        {logOutLink}
      </nav>
    </header>
  );
};


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
