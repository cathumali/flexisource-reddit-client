
import { feedsConstants } from '../constants'; 

export const API_URL = `https://www.reddit.com/r/subreddit/hot`;

export const getRequestHeaders = ( token=null ) => {
  const TOKEN = token ? token : '-xynhmitaz8Y23ckudz2bm5352Msu1Q';
  const requestHeaders = { 
    method: 'GET', 
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "content-type": "application/json",
      "transfer-encoding": "chunked",
      "Cache-Control": "no-cache, private",
    }
  };
  return requestHeaders;
}

const fetchFeedsService = (requestHeaders, params='' ) => {
  return fetch(`${API_URL}${params}`, requestHeaders).then(res => res.json() );
}

export const fetchFeeds = () => dispatch => 
{
  fetchFeedsService().then(res => {
    const { code, data, message } = res;
    if (code == 200) {
      dispatch({ 
        type: feedsConstants.FETCH_FILTERED_ROOMLAS_SUCCESS, 
        payload: data, 
        payload_details: res,
      });
    } else {
       
    }
  }).catch( err => {
      const message = 'Err'
   });
}
