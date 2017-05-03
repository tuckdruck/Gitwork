import React from 'react';

const RepoStats = ({ repo }) => {
  let language = (<span className="repo-thumb language">{repo.language}</span>);
  if (!repo.language) { language = ""; }


  return(
    <div>
    {language}
    <span>
      <i className="fa fa-star" aria-hidden="true"></i>
      {repo.stargazers_count}
    </span>
    </div>
  );
};

export default RepoStats;
