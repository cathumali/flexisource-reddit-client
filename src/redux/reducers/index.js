import { combineReducers } from "redux";
import { globalReducer } from './globalReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({ 
  app   : globalReducer,
  posts : postsReducer
});