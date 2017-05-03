import React from 'react';
import RepoIndexItem from './repo_index_item';


const ReposRow = ({ repos }) => {
  return(
    <div className="repos-row">
      <RepoIndexItem key={repos[0].id} repo={repos[0]}/>
      <RepoIndexItem key={repos[1].id} repo={repos[1]}/>
    </div>
  );
};


export default ReposRow;
