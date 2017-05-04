import React from 'react';
import { Link } from 'react-router-dom';
import RepoIcon from './repo_icon';
import RepoStats from '../repo_stats';

const RepoHeader = ({ user, repo }) => {
  return(
    <div className="wide">
      <h1 className="repo-show">
        <RepoIcon />&nbsp;&nbsp;<Link to="/">{user.login}</Link>{" / "}
        <span className="repo-name">{repo.name}</span>
      </h1>
      <RepoStats repo={repo}/>
    </div>
  );
};

export default RepoHeader;
