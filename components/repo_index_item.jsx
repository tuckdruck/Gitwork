import React from 'react';

const RepoIndexItem = ({ repo }) => {
  return(
    <div key={repo.id}>
      {repo.name}
      {repo.description}
      {repo.language}
      {repo.stargazers_count}
    </div>
  );
};

export default RepoIndexItem;
