import React from 'react';
import Header from './header';
import ProfilePage from './profile_page';
import SignIn from './sign_in';
import Footer from './footer';

import { connect } from 'react-redux';

const App = ({ children, loggedIn }) => {
  let mainContent = loggedIn ? (<ProfilePage />) : (<SignIn />);
  let footer = loggedIn ? (<Footer />) : "";
  if (loggedIn) {

  }
  return(
    <main className="main">
      {mainContent}
      {footer}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.user
  };
};

export default connect(mapStateToProps, null)(App);
