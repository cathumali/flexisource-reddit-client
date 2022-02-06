import { postContentConstants } from '../constants'; 

const initialState = {
  loading: true, 
  data: null
};

export const postContentReducer = (state = initialState, action) => {

  switch (action.type) {
    case postContentConstants.REQUEST_POST_CONTENT:
			return { 
        ...state, 
        loading: true, 
        data: null 
      }	 
    case postContentConstants.RECEIVE_POST_CONTENT:
      return { 
        ...state, 
        loading: false,           
        data: action.payload 
      };
    case postContentConstants.FETCH_POST_CONTENT_ERROR:
      return { 
        ...state, 
        loading: false,
      };
    default:
      return state;
  }
}
