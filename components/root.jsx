import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './app';
import RepoShowPage from './repo_show/repo_show_page';


const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter><Route path="/" component={App} /></HashRouter>
  </Provider>
);


export default Root;
