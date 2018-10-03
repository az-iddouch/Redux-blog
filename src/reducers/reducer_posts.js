import { FETCH_POSTS } from '../actions';

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
    default:
      return state;
  }
}
