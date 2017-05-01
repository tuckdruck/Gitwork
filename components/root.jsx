import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './app';
import RepoShowPage from './repo_show_page';

const Root = ({ store }) => (

  <Provider store={ store }>

    <HashRouter>
      <div>
        <Route path="/repos/:repoId" component={RepoShowPage} />
        <Route exact path="/" component={App} />
      </div>
    </HashRouter>

  </Provider>

);

export default Root;
