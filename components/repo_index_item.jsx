import React from 'react';

const RepoIndexItem = ({ repo }) => {
  let description = repo.description;
  if (repo.description && repo.description.length > 200) {
    description = repo.description.slice(0, 197) + "..."
  }

  let language = (<span className="repo-thumb language">{repo.language}</span>);
  if (!repo.language) { language = ""; }
  return(
    <div className="repo-thumb" key={repo.id}>
      <h1>{repo.name}</h1>
      <p className="repo-thumb description">{description}</p>
      {language}
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        {repo.stargazers_count}
      </span>
    </div>
  );
};

export default RepoIndexItem;
