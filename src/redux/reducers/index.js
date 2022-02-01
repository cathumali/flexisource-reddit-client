import { combineReducers } from "redux";
import { globalReducer } from './globalReducer';

export const rootReducer = combineReducers({ 
  app : globalReducer,
});