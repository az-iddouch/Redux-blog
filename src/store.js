import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxPromiseMiddleware from 'redux-promise';

// const initialState = {};
const middleware = [reduxPromiseMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
