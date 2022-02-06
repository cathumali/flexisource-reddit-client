import { config } from '../../utils/config';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
export const RESET_ERROR = 'RESET_ERROR'


export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    payload: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPostsError(subreddit, err) {
  return {
    type: FETCH_POSTS_ERROR,
    subreddit,
    err
  }
}

export function resetError() {
  return {
    type: RESET_ERROR
  }
}


export const fetchPosts = (subreddit=config.defaultTopic) => dispatch => 
{
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
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


// import { feedsConstants } from '../constants'; 

// export const API_URL = `https://www.reddit.com/r/reactjs/hot.json`;

// export const getRequestHeaders = ( token=null ) => {
//   const TOKEN = token ? token : '-xynhmitaz8Y23ckudz2bm5352Msu1Q';
//   const requestHeaders = { 
//     method: 'GET', 
//     headers: {
//       Authorization: `bearer ${TOKEN}`,
//       "content-type": "application/json",
//       "transfer-encoding": "chunked",
//       "Cache-Control": "no-cache, private",
//     }
//   };
//   return requestHeaders;
// }

// const fetchPostsService = (requestHeaders, params='' ) => {
//   return fetch(`${API_URL}${params}`, requestHeaders).then(res => res.json() );
// }

  // fetchPostsService().then(res => {
  //   const { code, data, message } = res;
  //   if (code == 200) {
  //     dispatch({ 
  //       type: feedsConstants.FETCH_FILTERED_ROOMLAS_SUCCESS, 
  //       payload: data, 
  //       payload_details: res,
  //     });
  //   } else {
       
  //   }
  // }).catch( err => {
  //     const message = 'Err'
  //  });

// export function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }

// function fetchHotPosts(subreddit) {turn dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => {
//         if (!response.ok) {
//           throw Error(`Subreddit: ${subreddit} doesn't exist.`)
//         }
//         return response
//       })
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//       .catch(err => dispatch(fetchPostsError(subreddit, err.message)))
//   }
// }
