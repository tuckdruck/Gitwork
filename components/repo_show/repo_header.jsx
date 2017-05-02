import React from 'react';
import { Link } from 'react-router-dom';
import RepoIcon from './repo_icon';

const RepoHeader = ({ username, repoName }) => {
  return(
    <h1 className="repo-show">
      <RepoIcon />&nbsp;&nbsp;
      <Link to="/">{username}</Link>
      &nbsp;/&nbsp;
      <span className="repo-name">{repoName}</span>
    </h1>
  );
}

export default RepoHeader;
