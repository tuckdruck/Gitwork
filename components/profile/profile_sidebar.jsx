import React from 'react';

const ProfileSidebar = ({ user }) => {
  return(
    <section className="profile-sidebar">
      <img className="avatar" src={user.avatar_url} alt="avatar" />
      <h2>{user.name}</h2>
      <h3>{user.login}</h3>
      <p>{user.bio}</p>
      <span>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        {user.location}
      </span>
    </section>
  );
}
