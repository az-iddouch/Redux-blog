import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxPromiseMiddleware from 'redux-promise';

// const initialState = {};
const middleware = [reduxPromiseMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// yooo
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
