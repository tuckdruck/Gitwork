import 'whatwg-fetch'

export const fetchRepos = (user) => {
  const headers = { 'Authorization': 'Basic ' + `${user.token}` };
  const url = `https://api.github.com/user/repos?page=1&type=owner&sort=updated&order=asc`;
  return fetch(url, {
    headers: headers,
    cache: "no-store"
  });
};
