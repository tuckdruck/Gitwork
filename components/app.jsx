import React from 'react';
import Header from './header';
import ProfilePage from './profile_page';
import SignIn from './sign_in';
import Footer from './footer';

import { connect } from 'react-redux';

const App = ({ children, loggedIn, location }) => {
  if (loggedIn && location.pathname === "/") {
    return(<ProfilePage />);
  }
  else if (loggedIn) {
    return(children);
  }
  else {
    return(<SignIn />)
  }
  // let mainContent = loggedIn ? "" : (<SignIn />);
  // let footer = loggedIn ? (<Footer />) : "";
  //
  // return(
  //   <main className="main">
  //     {mainContent}
  //     {footer}
  //   </main>
  // );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.user
  };
};

export default connect(mapStateToProps, null)(App);
//
// const App = (props) => {
//   const { loggedIn, location, children, logout } = props;
//
//   if (loggedIn && rootUrl(location)) { return(<HomePageSignedIn />); }
//   else if (rootUrl(location)) { return(<HomePageSignedOut />); }
//   else { return(<div>{header(location)}{children}<Footer /></div>); }
// };
