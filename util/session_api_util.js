import 'whatwg-fetch'

export const logIn = (user) => {
  const headers = {
    'Authorization': 'Basic ' + `${user.token}`
  };
  
  const url = `https://api.github.com/users/${user.username}`;
  return fetch(url, {
    headers: headers,
    cache: "no-store"
  });
};
