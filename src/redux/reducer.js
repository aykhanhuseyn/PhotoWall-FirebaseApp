import { posts as InitialPosts } from '../data/posts';
import { comments as InitialComments } from '../data/comments';
import { combineReducers } from 'redux';

function posts(state = InitialPosts, action) {
  switch (action.type) {
    case 'REMOVE_POST':
      return state.filter(p => p.id !== action.id);
    case 'ADD_POST':
      return [...state, action.post];
    case 'LOAD_POSTS':
      return action.posts;
    default:
      return state;
  }
}

function comments(state = InitialComments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }
    case 'LOAD_COMMENTS':
      return action.comments;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
