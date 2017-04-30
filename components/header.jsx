import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';

const Header = (props) => {
  let logOutLink = "";
  if (props.loggedIn) {
    logOutLink = <button onClick={props.logOut}>Log Out</button>;
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
