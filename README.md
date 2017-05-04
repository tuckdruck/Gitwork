# Gitwork


[Gitwork][live] is an application for accessing your Github profile information and repositories, and managing your repositories' issues. Its styling is inspired by Github.

[live]: http://avitaldrucker.com/Gitwork/

## Instructions on How to Run Locally
1. Open up the Gitwork directory in your terminal.
2. Type `npm install` in the terminal and press enter.
3. Type `webpack` in the terminal and press enter.
4. Type `open index.html` in the terminal and press enter.

## Technologies Used

Gitwork is built using React v. 15.5.4 and Redux, and it interfaces with the Github API. It uses React Router version 4 and the Fetch API.

## Authentication

All requests to the Github API are authenticated through passing the personal API token in the headers of the request. Responses are processed through promises, and their associated data is persisted through the Redux store. Upon login, the user's username and session token are stored in session storage, ensuring the user is logged in until they log out or close the window.

## React Routes

There are two routes in the app: the root ("/") and the path for a repo show page ("/repos/:repoId"). The root path will render the profile page or sign in page, based on whether the user is logged in. The repo show page path will render a repo show page if the user is logged in, and redirect to the sign in page otherwise.

## Redux state

Below is the Root Reducer, displaying the structure of the Redux state:

```js
export default combineReducers({
  session: SessionReducer,
  repos: ReposReducer,
  issues: IssuesReducer
});
```

The session slice of state contains a key of "user", which points to null or an object with user information. The session slice of state also includes an array (initially empty) of login errors.
