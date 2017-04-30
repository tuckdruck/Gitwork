import React from 'react';
import Header from './header';
import ProfilePage from './profile_page';
import SignIn from './sign_in';

import { connect } from 'react-redux';

const App = ({ children, loggedIn }) => {
  let mainContent = loggedIn ? (<ProfilePage />) : (<SignIn />);
  if (loggedIn) {

  }
  return(
    <main>
      <Header />
      {mainContent}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.user
  };
};

export default connect(mapStateToProps, null)(App);
