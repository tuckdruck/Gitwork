import { logIn } from '../actions/session_actions';

import { connect } from 'react-redux';
import { Route, browserHistory, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './header';
import Footer from './footer';

import ProfilePage from './profile/profile_page';
import SignInPage from './sign_in_page';
import RepoShowPage from './repo_show/repo_show_page';


const App = ({ loggedIn, location }) => {
  if (loggedIn) {
    return(
      <div>
        <Header />
        <Route path="/repos/:repoId" component={RepoShowPage} />
        <Route exact path="/" component={ProfilePage} />
        <Footer />
      </div>
    );
  }
  else if (location.pathname === "/") {
    return(
      <main className="landing-container">
        <Header />
        <SignInPage />
      </main>
    );
  } else { return(<Redirect to="/" />); }
};


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: !!session.user
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (user) => (dispatch(logIn(user)))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
