import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostsIndex from './components/PostsIndex';
import Header from './components/Header';
import NewPost from './components/NewPost';

ReactDOM.render(
  <Provider store={store}>
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
