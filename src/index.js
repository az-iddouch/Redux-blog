import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reduxPromiseMiddleware from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import Header from './components/Header';
import NewPost from './components/NewPost';

const createStoreWithMiddleware = applyMiddleware(reduxPromiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={PostsIndex} />
            <Route path="/posts/new" component={NewPost} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </Provider>,
  document.querySelector('.app')
);
