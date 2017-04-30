const reposFormatter = repos => {
  return Object.keys(repos).map((id) => { return repos[id] });
}

export default reposFormatter;
