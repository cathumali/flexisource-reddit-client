import { config } from '../../utils/config';
import { postsConstants } from '../constants';


export function requestPosts(subreddit) {
  return {
    type: postsConstants.REQUEST_POSTS,
    subreddit
  }
}

export function receivePosts(subreddit, json) {
  return {
    type: postsConstants.RECEIVE_POSTS,
    subreddit,
    payload: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPostsError(subreddit, err) {
  return {
    type: postsConstants.FETCH_POSTS_ERROR,
    subreddit,
    err
  }
}

export function resetError() {
  return {
    type: postsConstants.RESET_ERROR
  }
}


export const fetchPosts = (subreddit=config.defaultTopic) => dispatch => 
{
  dispatch(requestPosts(subreddit))
  return fetch(`${config.apiBaseURL}/r/${subreddit}.json`)
    .then(response => {
      if (!response.ok) {
        throw Error(`Subreddit: ${subreddit} doesn't exist.`)
      }
      return response
    })
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
    .catch(err => dispatch(fetchPostsError(subreddit, err.message)))  
}
 