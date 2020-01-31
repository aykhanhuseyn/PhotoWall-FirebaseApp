//action creators and actions
import { database } from '../database/config';

export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref('post')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => console.log(error));
  };
}

export function startLoadingPosts() {
  return dispatch => {
    let posts = [];
    return database
      .ref('post')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch(error => console.log(error));
  };
}

export function startRemovingPost(id) {
  return dispatch => {
    return database
      .ref(`post/${id}`)
      .remove()
      .then(() => {
        database.ref(`comments/${id}`).remove();
        dispatch(removePost(id));
      })
      .catch(error => console.log(error));
  };
}

export function startAddingComment(postId, comment) {
  return dispatch => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => console.log(error));
  };
}

export function startLoadingComments() {
  return dispatch => {
    let comments = {};
    return database
      .ref('comments')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      })
      .catch(error => console.log(error));
  };
}

export function removePost(id) {
  return {
    type: 'REMOVE_POST',
    id
  };
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  };
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts
  };
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  };
}

export function loadComments(comments) {
  console.log(comments);
  return {
    type: 'LOAD_COMMENTS',
    comments
  };
}
