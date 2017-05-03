import React from 'react';

const RepoStats = ({ repo }) => {
  let repoLanguage;
  if (repo.language) {
    repoLanguage = (<span className="repo-thumb language">{repo.language}</span>);
  }
  else {
    repoLanguage = "";
  }
  return(
    <div>
      {repoLanguage}
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        {repo.stargazers_count}
      </span>
    </div>
  );
};

export default RepoStats;
