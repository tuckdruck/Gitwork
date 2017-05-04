
export const fetchRepos = (user) => {
  const headers = { 'Authorization': `Basic ${user.token}` };

  const url = `https://api.github.com/user/repos?type=owner&sort=updated&order=desc`;

  return fetch(url, {
    headers: headers,
    cache: "no-store"
  });
};
