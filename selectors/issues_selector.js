const issuesFormatter = issues => {
  const arr = [];
  Object.keys(issues).forEach((id) => { arr.push(issues[id]); });
  return arr;
};

export default issuesFormatter;
