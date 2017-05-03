import React from 'react';
import { connect } from 'react-redux';

import { logIn } from '../../actions/session_actions';

import ReposIndex from './repos_index';
import Header from '../header';
import ProfileSidebar from './profile_sidebar';


const ProfilePage = ({ user, logInUser }) => {
  if (!user.login) {
    logInUser(user);
    return(<div></div>);
  }
  return(
    <div className="profile-main">
      <ProfileSidebar user={user}/><ReposIndex />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logInUser: (user) => { return dispatch(logIn(user)); }
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(ProfilePage);
