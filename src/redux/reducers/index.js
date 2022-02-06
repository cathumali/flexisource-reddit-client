import { combineReducers } from "redux";
import { globalReducer } from './globalReducer';
import { postsReducer } from './postsReducer';
import { postContentReducer } from './postContentReducer';

export const rootReducer = combineReducers({ 
  app   : globalReducer,
  posts : postsReducer,
  post_content: postContentReducer
});