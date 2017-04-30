import React from 'react';
import { connect } from 'react-redux';
import ReposIndex from './repos_index';

const ProfilePage = ({ user }) => {
  return(
    <div className="profile-main">
      <section className="profile-sidebar">
        <img className="avatar" src={user.avatar_url} alt="avatar" />
        <h2>{user.name}</h2>
        <h3>{user.login}</h3>
        <p>{user.bio}</p>
        <span>
          <i className="fa fa-map-marker" aria-hidden="true"></i> {user.location}
        </span>
      </section>
      <ReposIndex />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps, null)(ProfilePage);
