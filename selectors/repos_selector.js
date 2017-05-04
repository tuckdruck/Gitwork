const reposFormatter = repos => {
  const arr = [];
  Object.keys(repos).forEach((id) => { arr.unshift(repos[id]); });
  return arr;
};

export default reposFormatter;
