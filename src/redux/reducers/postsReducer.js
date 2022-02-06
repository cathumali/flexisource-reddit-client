import { postsConstants } from '../constants'; 

const initialState = {
  loading: true, 
  data: null
};

export const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case postsConstants.REQUEST_POSTS:
			return { 
        ...state, 
        loading: true, 
        data: null 
      }	 
    case postsConstants.RECEIVE_POSTS:
      return { 
        ...state, 
        loading: false,           
        data: action.payload 
      };
    case postsConstants.FETCH_POSTS_ERROR:
      return { 
        ...state, 
        loading: false,
      };
    default:
      return state;
  }
}
