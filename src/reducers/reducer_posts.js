import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // transfering  the oncoming array of posts to an object
      // with the keys as post IDs
      // we could also accomplish the same thing using Lodash's _.mapKeys()
      let obj = {};
      action.payload.data.forEach(post => {
        obj[post.id] = post;
      });
      return obj;
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
}
