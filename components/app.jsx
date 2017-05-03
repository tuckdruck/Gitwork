import React from 'react';
import Header from './header';
import ProfilePage from './profile/profile_page';
import SignIn from './sign_in';
import Footer from './footer';
import RepoShowPage from './repo_show/repo_show_page';

import { logIn } from '../actions/session_actions';
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect } from 'react-router-dom';

const App = ({ children, loggedIn, location, user, logInUser }) => {
  if (loggedIn && location.pathname === "/") {
    return(
      <div>
      <Header />
      <ProfilePage />
      </div>
    );
  }
  else if (loggedIn) {
    return(
      <div>
      <Header />
      <Route path="/repos/:repoId" component={RepoShowPage} />
      </div>
    );
  }
  else if (!loggedIn && location.pathname !== "/"){
    return(<Redirect to="/" />);
  }

  return(<SignIn />);
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.user,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => { return dispatch(logIn(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
