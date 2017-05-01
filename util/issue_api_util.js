import 'whatwg-fetch'

export const fetchIssues = (user, repo) => {
  const headers = { 'Authorization': 'Basic ' + `${user.token}` };
  const url = `https://api.github.com/repos/${user.login}/${repo.name}/issues?state=all`;
  return fetch(url, {
    headers: headers
  });
};

export const updateIssue = (user, issue, params) => {
  const headers = { 'Authorization': 'Basic ' + `${user.token}` };
  const repositoryUrlArr = issue.repository_url.split("/");
  const repository = repositoryUrlArr[repositoryUrlArr.length - 1];
  const url = `https://api.github.com/repos/${user.login}/${repository}/issues/${issue.number}`;

  return fetch(url, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(params)
  });
};

export const createIssue = (user, issue, repo) => {
  debugger
  const headers = { 'Authorization': 'Basic ' + `${user.token}` };
  const url = `https://api.github.com/repos/${user.login}/${repo.name}/issues`

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(issue)
  });
};
