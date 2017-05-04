import React from 'react';

const location = (user) => (
  <span>
    <i className="fa fa-map-marker" aria-hidden="true"></i>
    {user.location}
  </span>
);

const ProfileSidebar = ({ user }) => (
  <section className="profile-sidebar">
    <img className="avatar" src={user.avatar_url} alt="avatar" />
    <h2>{user.name}</h2>
    <h3>{user.login}</h3>
    <p>{user.bio}</p>
    {location(user)}
  </section>
);

export default ProfileSidebar;
