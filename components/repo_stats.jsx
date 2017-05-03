import React from 'react';

const RepoStats = ({ repo }) => {
  return(
    <div>
      <span className="repo-thumb language">{repo.language}</span>
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        {repo.stargazers_count}
      </span>
    </div>
  );
};

export default RepoStats;
