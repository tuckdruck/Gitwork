

const rootUrl = (username) => {
  return "https://api.github.com/repos/" + username + "/";
};


const headers = (token) => {
  return { 'Authorization': `Basic ${token}` };
}


export const fetchIssues = (user, repo) => {
  const url = `${rootUrl(user.login)}${repo.name}/issues?state=all`;
  return fetch(url, {
    headers: headers(user.token)
  });
};


export const updateIssue = (user, issue, params) => {
  const repositoryUrlArr = issue.repository_url.split("/");
  const repository = repositoryUrlArr[repositoryUrlArr.length - 1];
  const root = rootUrl(user.login);
  const url = `${root}${repository}/issues/${issue.number}`;

  return fetch(url, {
    method: "PATCH",
    headers: headers(user.token),
    body: JSON.stringify(params)
  });
};


export const createIssue = (user, issue, repo) => {
  const url = `${rootUrl(user.login)}${repo.name}/issues`

  return fetch(url, {
    method: "POST",
    headers: headers(user.token),
    body: JSON.stringify(issue)
  });
};
