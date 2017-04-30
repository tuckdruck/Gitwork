import 'whatwg-fetch'

export const fetchRepos = (user) => {
  const headers = { 'Authorization': 'Basic ' + `${user.token}` };
  const url = `https://api.github.com/user/repos?type=owner`;
  return fetch(url, {
    headers: headers
  });
};
