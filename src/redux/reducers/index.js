import { combineReducers } from "redux";
import { globalReducer } from './globalReducer';
import { feedsReducer } from './feedsReducer';

export const rootReducer = combineReducers({ 
  app   : globalReducer,
  feeds : feedsReducer
});