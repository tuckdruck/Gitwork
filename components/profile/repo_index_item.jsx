import React from 'react';
import { Link } from 'react-router-dom';
import RepoStats from '../repo_stats';

const RepoIndexItem = ({ repo }) => {
  if (!repo) { return(<div></div>); }
  return(
    <div className="repo-thumb" key={repo.id}>
      <h1><Link to={`repos/${repo.id}`}>{repo.name}</Link></h1>
      <p className="repo-thumb description">{repo.description}</p>
      <RepoStats repo={repo}/>
    </div>
  );
};

export default RepoIndexItem;
