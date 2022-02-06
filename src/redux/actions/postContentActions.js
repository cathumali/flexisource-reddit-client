import { config } from '../../utils/config';
// import { postContentConstants } from '../constants';

export const fetchPostContents = (subreddit) => dispatch => 
{
  return fetch(`${config.apiBaseURL}/r/${subreddit}/about.json`)
    .then(response => {
      if (!response.ok) {
        throw Error(`Subreddit: ${subreddit} doesn't exist.`)
      }
      return response
    })
    .then(response => response.json());
}
 
export const fetchPostComments = (subreddit, id) => dispatch => 
{
  return fetch(`${config.apiBaseURL}/r/${subreddit}/comments/${id}.json`)
    .then(response => {
      if (!response.ok) {
        throw Error(`Subreddit: ${subreddit} doesn't exist.`)
      }
      return response
    })
    .then(response => response.json());
}