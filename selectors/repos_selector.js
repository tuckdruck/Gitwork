const reposFormatter = repos => {
  const arr = [];
  Object.keys(repos).forEach((id) => { arr.push(repos[id]) });
  return arr;
}

export default reposFormatter;
